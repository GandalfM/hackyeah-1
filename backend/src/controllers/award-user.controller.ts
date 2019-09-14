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
import {AwardRepository} from '../repositories';

export class AwardUserController {
  constructor(
    @repository(AwardRepository)
    public awardRepository: AwardRepository,
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
}
