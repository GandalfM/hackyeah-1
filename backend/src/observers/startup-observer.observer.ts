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
              {latitude: 52.112650, longitude: 20.827937}
              ])
              .then(() => console.log("Added bins initial dataset"));
      }
      if(userCount === 0) {
          this.userRepository.createAll([
              {username: "zak", email: "zakhttp@gmail.com"},
              {username: "mateusz", email: "mateusz.szerszynski@gmail.com"}
          ])
              .then(() => console.log("Added users initial dataset"));
      }
      if (binCount === 0) {
          this.garbageBinRepository.createAll([
              {latitude: 52.112666, longitude: 20.827937, userId: 1, approvalCount: 5, rejectionCount: 1},
              {latitude: 52.112650, longitude: 20.827937, userId: 1}
              ])
              .then(() => console.log("Added bins initial dataset"));
      }
      if (awardCount === 0) {
          this.awardRepository.createAll([
              {points: 100, userId: 1, garbageBinId: 1}
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
