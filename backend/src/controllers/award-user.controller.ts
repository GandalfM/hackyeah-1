import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Award,
  User,
} from '../models';
import {AwardRepository, UserRepository} from '../repositories';

import groupBy = require('lodash/groupBy');
import orderBy = require('lodash/orderBy');
import findIndex = require('lodash/findIndex');

export class AwardUserController {
  constructor(
    @repository(AwardRepository)
    public awardRepository: AwardRepository,
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @get('/awards/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Award',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.number('id') id: typeof Award.prototype.id,
  ): Promise<User> {
    return this.awardRepository.user(id);
  }


  @get('/awards/{id}/user/summary', {
    responses: {
      '200': {
        description: 'User score summary',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                sum: {type: 'number'},
                place: {type: 'number'},
                },
            },
          },
        },
      },
    },
  })
  async getUserSummary(
      @param.path.number('id') id: typeof Award.prototype.id,
  ): Promise<{points: number, place: number}> {
    const awardsForUser = await this.userRepository.awards(id).find({});

    const allAwards = await this.awardRepository.find({});

    const points = awardsForUser.map(award => award.points).reduce((p, c) => p + c, 0);

    const groupedBy = groupBy(allAwards, (award: Award) => award.userId);
    const usersIdsWithPoints = Object
        .keys(groupedBy)
        .map((userId) => {
          return {
            userId,
            points: groupedBy[userId].map(award => award.points).reduce((p, c) => p + c, 0)
          }
        });

    const ordered = orderBy(
        usersIdsWithPoints,
        (usersIdsWithPoints) => usersIdsWithPoints.points,
        ['desc']
    );

    const place = findIndex(ordered, (value) => value.userId === id!.toString()) + 1;

    return {
      points: points,
      place: place
    };
  }


  @get('/awards/user/top', {
    responses: {
      '200': {
        description: 'Top ten users',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                points: {type: 'number'},
                userId: {type: 'string'},
              },
            },
          },
        },
      },
    },
  })
  async getTopTenUsers(
  ): Promise<Array<{points: number, userId: string}>> {
    const allAwards = await this.awardRepository.find({});

    const groupedBy = groupBy(allAwards, (award: Award) => award.userId);
    const usersIdsWithPoints = Object
        .keys(groupedBy)
        .map((userId) => {
          return {
            userId,
            points: groupedBy[userId].map(award => award.points).reduce((p, c) => p + c, 0)
          }
        });

    const ordered = orderBy(
        usersIdsWithPoints,
        (usersIdsWithPoints) => usersIdsWithPoints.points,
        ['desc']
    );


    //TODO: map to user id of type number not string!
    return ordered.slice(0, 10);
  }

}
