import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {GarbageBin, GarbageBinRelations, User} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';

export class GarbageBinRepository extends DefaultCrudRepository<
  GarbageBin,
  typeof GarbageBin.prototype.id,
  GarbageBinRelations
> {

  public readonly user: BelongsToAccessor<User, typeof GarbageBin.prototype.id>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(GarbageBin, dataSource);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
  }
}
