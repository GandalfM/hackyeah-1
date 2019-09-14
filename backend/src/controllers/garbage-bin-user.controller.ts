import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  GarbageBin,
  User,
} from '../models';
import {GarbageBinRepository} from '../repositories';

export class GarbageBinUserController {
  constructor(
    @repository(GarbageBinRepository)
    public garbageBinRepository: GarbageBinRepository,
  ) { }

  @get('/garbage-bins/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to GarbageBin',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.number('id') id: typeof GarbageBin.prototype.id,
  ): Promise<User> {
    return this.garbageBinRepository.user(id);
  }
}
