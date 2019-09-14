import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class GarbageBin extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  latitude: string;

  @property({
    type: 'string',
    required: true,
  })
  longitude: string;

  @property({
    type: 'number',
    id: true,
    required: true,
    generated: true,
  })
  id: number;


  constructor(data?: Partial<GarbageBin>) {
    super(data);
  }
}

export interface GarbageBinRelations {
  // describe navigational properties here
}

export type GarbageBinWithRelations = GarbageBin & GarbageBinRelations;
