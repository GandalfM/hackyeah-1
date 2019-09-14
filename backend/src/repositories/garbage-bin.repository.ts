import {DefaultCrudRepository} from '@loopback/repository';
import {GarbageBin, GarbageBinRelations} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GarbageBinRepository extends DefaultCrudRepository<
  GarbageBin,
  typeof GarbageBin.prototype.id,
  GarbageBinRelations
> {
  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource,
  ) {
    super(GarbageBin, dataSource);
  }
}
