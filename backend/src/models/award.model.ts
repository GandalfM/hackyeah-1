import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from './user.model';
import {GarbageBin} from './garbage-bin.model';

@model({settings: {}})
export class Award extends Entity {
  @property({
    type: 'number',
    required: true,
  })
  points: number;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => User)
  userId: number;

  @belongsTo(() => GarbageBin)
  garbageBinId: number;

  constructor(data?: Partial<Award>) {
    super(data);
  }
}

export interface AwardRelations {
  // describe navigational properties here
}

export type AwardWithRelations = Award & AwardRelations;
