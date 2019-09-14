import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Award, AwardRelations, User, GarbageBin} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';
import {GarbageBinRepository} from './garbage-bin.repository';

export class AwardRepository extends DefaultCrudRepository<
  Award,
  typeof Award.prototype.id,
  AwardRelations
> {

  public readonly user: BelongsToAccessor<User, typeof Award.prototype.id>;

  public readonly garbageBin: BelongsToAccessor<GarbageBin, typeof Award.prototype.id>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('GarbageBinRepository') protected garbageBinRepositoryGetter: Getter<GarbageBinRepository>,
  ) {
    super(Award, dataSource);
    this.garbageBin = this.createBelongsToAccessorFor('garbageBin', garbageBinRepositoryGetter,);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
  }
}
