import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from './user.model';

@model({settings: {}})
export class GarbageBin extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  latitude: number;

  @property({
    type: 'number',
    required: true,
  })
  longitude: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @belongsTo(() => User)
  userId: number;

  @property({
    type: 'number',
    default: 0
  })
  approvalCount: number;

  @property({
    type: 'number',
    default: 0
  })
  rejectionCount: number;

  constructor(data?: Partial<GarbageBin>) {
    super(data);
  }
}

export interface GarbageBinRelations {
  // describe navigational properties here
}

export type GarbageBinWithRelations = GarbageBin & GarbageBinRelations;
