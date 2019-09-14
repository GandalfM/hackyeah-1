import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {User, UserRelations, Award} from '../models';
import {PostgresDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AwardRepository} from './award.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly awards: HasManyRepositoryFactory<Award, typeof User.prototype.id>;

  constructor(
    @inject('datasources.postgres') dataSource: PostgresDataSource, @repository.getter('AwardRepository') protected awardRepositoryGetter: Getter<AwardRepository>,
  ) {
    super(User, dataSource);
    this.awards = this.createHasManyRepositoryFactoryFor('awards', awardRepositoryGetter,);
  }
}
