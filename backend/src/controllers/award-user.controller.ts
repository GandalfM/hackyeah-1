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
  ): Promise<{sum: number, place: number}> {
    const awardsForUser = await this.userRepository.awards(id).find({});

    const allAwards = await this.awardRepository.find({});

    const points = awardsForUser.map(award => award.points).reduce((p, c) => {
      return p + c;
    }, 0);

    return {
      sum: points,
      place: 10
    };
  }
}
