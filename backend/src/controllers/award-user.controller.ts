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

// @ts-ignore
import groupBy = require('lodash/groupBy');
// @ts-ignore
import orderBy = require('lodash/orderBy');
// @ts-ignore
import findIndex = require('lodash/findIndex');
// @ts-ignore
import keyBy = require('lodash/keyBy');

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
                points: {type: 'number'},
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
    console.log(awardsForUser);
    const allAwards = await this.awardRepository.find({});

    const points = awardsForUser.map(award => award.points).reduce((p, c) => p + c, 0);
    const groupedBy = groupBy(allAwards, (award: Award) => award.userId);
    const usersIdsWithPoints = Object
        .keys(groupedBy)
        .map((userId) => {
          return {
            userId,
            points: groupedBy[userId].map((award: any) => award.points).reduce((p: any, c: any) => p + c, 0)
          }
        });
    const ordered = orderBy(
        usersIdsWithPoints,
        (usersIdsWithPoints: any) => usersIdsWithPoints.points,
        ['desc']
    );
    const place = findIndex(ordered, (value: any) => value.userId === id!.toString()) + 1;

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
              type: 'array',
              items: {properties: {
                  points: {type: 'number'},
                  userId: {type: 'string'},
                  avatarUrl: {type: 'string'},
                  username: {type: 'string'},
                  email: {type: 'string'},
                }}
,
            },
          },
        },
      },
    },
  })
  async getTopTenUsers(
  ): Promise<Array<{points: number, userId: string, avatarUrl: string, username: string, email: string}>> {
    const allAwards = await this.awardRepository.find({});

    const groupedBy = groupBy(allAwards, (award: Award) => award.userId);
    const usersIdsWithPoints = Object
        .keys(groupedBy)
        .map((userId) => {
          return {
            userId,
            points: groupedBy[userId].map((award: any) => award.points).reduce((p: any, c: any) => p + c, 0)
          }
        });

    const ordered = orderBy(
        usersIdsWithPoints,
        (usersIdsWithPoints: any) => usersIdsWithPoints.points,
        ['desc']
    );

    const allUsers = await this.userRepository.find({});



    const users = await this.userRepository.find({});
    const userMap = keyBy(users, 'id');

    const usersWithoutPoints = users.filter((user) => user && (Object.keys(usersIdsWithPoints).indexOf(user.id!.toString()) === -1))
    console.log('users without points', usersWithoutPoints);

    const ordered2 = [...ordered, ...usersWithoutPoints.map(user => ({userId: user.id!, points: 0}))];
    const topTen = [...ordered2.slice(0, 10)];

    //TODO: map to user id of type number not string!
    return topTen.map(v => {
      const {avatarUrl, username, email} = userMap[v.userId];
        return {
          ...v,
          avatarUrl,
          username,
          email
        }
    });
  }

}
