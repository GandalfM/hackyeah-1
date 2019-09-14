import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  User,
  Award,
} from '../models';
import {UserRepository} from '../repositories';

export class UserAwardController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/awards', {
    responses: {
      '200': {
        description: 'Array of Award\'s belonging to User',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Award)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Award>,
  ): Promise<Award[]> {
    return this.userRepository.awards(id).find(filter);
  }

  @post('/users/{id}/awards', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Award)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Award, {
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) award: Omit<Award, 'id'>,
  ): Promise<Award> {
    return this.userRepository.awards(id).create(award);
  }

  @patch('/users/{id}/awards', {
    responses: {
      '200': {
        description: 'User.Award PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Award, {partial: true}),
        },
      },
    })
    award: Partial<Award>,
    @param.query.object('where', getWhereSchemaFor(Award)) where?: Where<Award>,
  ): Promise<Count> {
    return this.userRepository.awards(id).patch(award, where);
  }

  @del('/users/{id}/awards', {
    responses: {
      '200': {
        description: 'User.Award DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Award)) where?: Where<Award>,
  ): Promise<Count> {
    return this.userRepository.awards(id).delete(where);
  }


}
