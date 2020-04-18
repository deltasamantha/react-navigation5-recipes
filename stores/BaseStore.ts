import {RootStore} from "./StoreContext";

/**
 * Base class for Stores which (probably) all stores
 * should extend.
 *
 * BaseStore is responsible for providing rootStore and
 * also exposes convenient methods that can simplify usage
 * in other stores.
 */
abstract class BaseStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}

export default BaseStore;
