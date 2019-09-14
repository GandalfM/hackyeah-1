import {
  /* inject, Application, CoreBindings, */
  lifeCycleObserver, // The decorator
  LifeCycleObserver, // The interface
} from '@loopback/core';

import {
  repository
} from '@loopback/repository';
import {GarbageBinRepository} from "../repositories";

/**
 * This class will be bound to the application as a `LifeCycleObserver` during
 * `boot`
 */
@lifeCycleObserver('')
export class StartupObserverObserver implements LifeCycleObserver {
  @repository(GarbageBinRepository)
  private repository: GarbageBinRepository;

  // constructor(
  //   @inject(CoreBindings.APPLICATION_INSTANCE) private app: Application,
  // ) {}

  /**
   * This method will be invoked when the application starts
   */
  async start(): Promise<void> {
      const {count} = await this.repository.count({});
      if (count === 0) {
          this.repository.create({latitude: "52.112666", longitude: "20.827937"})
              .then(() => console.log("Added initial dataset"));
      }
  }

  /**
   * This method will be invoked when the application stops
   */
  async stop(): Promise<void> {
    // Add your logic for stop
  }
}
