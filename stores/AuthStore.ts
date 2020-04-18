import AsyncStorage from "@react-native-community/async-storage";
import {action, observable} from "mobx";
import BaseStore from "./BaseStore";

const STORAGE_KEY_ACCESS_TOKEN = "accessToken";

class AuthStore extends BaseStore {
  @observable
  accessToken?: string;

  @observable
  isLoggedIn: boolean = false;

  @observable
  initiated: boolean = false;

  /**
   * Sync stuff persisted in async storage with mobx in-memory store.
   */
  @action
  async initAsyncStorage() {
    try {
      const accessToken = await AsyncStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);
      if (accessToken) {
        this.accessToken = accessToken;
        this.isLoggedIn = true;
      }
      this.initiated = true;
      return accessToken;
    } catch (err) {
      this.initiated = true;
      throw err;
    }
  }

  private async updateAsyncStorage(key: string, value?: string) {
    try {
      await AsyncStorage.setItem(key, value || "");
    } catch (err) {
      console.warn(`Failed to save ${key} in storage`, err);
    }
  }

  @action
  async authenticate() {
    this.accessToken = "Dummy access token";
    this.isLoggedIn = true;
    await this.updateAsyncStorage(STORAGE_KEY_ACCESS_TOKEN, this.accessToken);
  }

  @action
  async logout() {
    this.onLogoutCleanup();
  }

  onLogoutCleanup() {
    this.accessToken = undefined;
    this.isLoggedIn = false;
    AsyncStorage.clear();
    // Add more cleanup, such as clearing async storage, unregister for pushes etc
  }
}

export default AuthStore;
