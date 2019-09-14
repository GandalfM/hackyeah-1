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
  GarbageBin,
} from '../models';
import {AwardRepository} from '../repositories';

export class AwardGarbageBinController {
  constructor(
    @repository(AwardRepository)
    public awardRepository: AwardRepository,
  ) { }

  @get('/awards/{id}/garbage-bin', {
    responses: {
      '200': {
        description: 'GarbageBin belonging to Award',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(GarbageBin)},
          },
        },
      },
    },
  })
  async getGarbageBin(
    @param.path.number('id') id: typeof Award.prototype.id,
  ): Promise<GarbageBin> {
    return this.awardRepository.garbageBin(id);
  }
}
