import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {GarbageBin} from '../models';
import {GarbageBinRepository} from '../repositories';

export class GarbageBinControllerController {
  constructor(
    @repository(GarbageBinRepository)
    public garbageBinRepository : GarbageBinRepository,
  ) {}

  @post('/garbage-bins', {
    responses: {
      '200': {
        description: 'GarbageBin model instance',
        content: {'application/json': {schema: getModelSchemaRef(GarbageBin)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GarbageBin, {exclude: ['id']}),
        },
      },
    })
    garbageBin: Omit<GarbageBin, 'id'>,
  ): Promise<GarbageBin> {
    return this.garbageBinRepository.create(garbageBin);
  }

  @get('/garbage-bins/count', {
    responses: {
      '200': {
        description: 'GarbageBin model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(GarbageBin)) where?: Where<GarbageBin>,
  ): Promise<Count> {
    return this.garbageBinRepository.count(where);
  }

  @get('/garbage-bins', {
    responses: {
      '200': {
        description: 'Array of GarbageBin model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(GarbageBin)},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(GarbageBin)) filter?: Filter<GarbageBin>,
  ): Promise<GarbageBin[]> {
    return this.garbageBinRepository.find(filter);
  }

  @patch('/garbage-bins', {
    responses: {
      '200': {
        description: 'GarbageBin PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GarbageBin, {partial: true}),
        },
      },
    })
    garbageBin: GarbageBin,
    @param.query.object('where', getWhereSchemaFor(GarbageBin)) where?: Where<GarbageBin>,
  ): Promise<Count> {
    return this.garbageBinRepository.updateAll(garbageBin, where);
  }

  @get('/garbage-bins/{id}', {
    responses: {
      '200': {
        description: 'GarbageBin model instance',
        content: {'application/json': {schema: getModelSchemaRef(GarbageBin)}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<GarbageBin> {
    return this.garbageBinRepository.findById(id);
  }

  @patch('/garbage-bins/{id}', {
    responses: {
      '204': {
        description: 'GarbageBin PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(GarbageBin, {partial: true}),
        },
      },
    })
    garbageBin: GarbageBin,
  ): Promise<void> {
    await this.garbageBinRepository.updateById(id, garbageBin);
  }

  @put('/garbage-bins/{id}', {
    responses: {
      '204': {
        description: 'GarbageBin PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() garbageBin: GarbageBin,
  ): Promise<void> {
    await this.garbageBinRepository.replaceById(id, garbageBin);
  }

  @del('/garbage-bins/{id}', {
    responses: {
      '204': {
        description: 'GarbageBin DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.garbageBinRepository.deleteById(id);
  }
}
