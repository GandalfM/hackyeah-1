import { lifeCycleObserver, LifeCycleObserver, } from '@loopback/core';

import { repository } from '@loopback/repository';
import {AwardRepository, GarbageBinRepository, UserRepository} from "../repositories";

/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver('')
export class StartupObserverObserver implements LifeCycleObserver {
  @repository(GarbageBinRepository)
  private garbageBinRepository: GarbageBinRepository;
  @repository(UserRepository)
  private userRepository: UserRepository;
  @repository(AwardRepository)
  private awardRepository: AwardRepository;

  // constructor(
  //   @inject(CoreBindings.APPLICATION_INSTANCE) private app: Application,
  // ) {}

  /**
   * This method will be invoked when the application starts
   */
  async start(): Promise<void> {
      const {count: binCount} = await this.garbageBinRepository.count({});
      const {count: userCount} = await this.userRepository.count({});
      const {count: awardCount} = await this.awardRepository.count({});

      if (binCount === 0) {
          this.garbageBinRepository.createAll([
              {latitude: 52.112666, longitude: 20.827937},
              {latitude: 52.107525, longitude: 20.835998}
              ])
              .then(() => console.log("Added bins initial dataset"));
      }
      let users;
      if(userCount === 0) {
          users = await this.userRepository.createAll([
              {username: "zak", email: "zakhttp@gmail.com"},
              {username: "mateusz", email: "mateusz.szerszynski@gmail.com"}
          ]);
          console.log("Added users initial dataset", users);
      } else {
          users = await this.userRepository.find({});
      }
      let bins;
      if (binCount === 0) {
          bins = await this.garbageBinRepository.createAll([
              {latitude: 52.112666, longitude: 20.827937, userId: users[0].id, approvalCount: 5, rejectionCount: 1},
              {latitude: 52.112650, longitude: 20.827937, userId: users[0].id}
              ]);
          console.log("Added bins initial dataset", bins);
      } else {
          bins = await this.garbageBinRepository.find({})
      }
      if (awardCount === 0) {
          this.awardRepository.createAll([
              {points: 100, userId: users[0].id, garbageBinId: bins[0].id},
              {points: 200, userId: users[1].id, garbageBinId: bins[1].id}
          ])
              .then(() => console.log("Added awards initial dataset"));
      }
  }

  /**
   * This method will be invoked when the application stops
   */
  async stop(): Promise<void> {
    // Add your logic for stop
  }
}
