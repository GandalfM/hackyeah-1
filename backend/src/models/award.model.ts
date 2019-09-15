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
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @belongsTo(() => User)
  userId: string;

  @belongsTo(() => GarbageBin)
  garbageBinId: string;

  constructor(data?: Partial<Award>) {
    super(data);
  }
}

export interface AwardRelations {
  // describe navigational properties here
}

export type AwardWithRelations = Award & AwardRelations;
