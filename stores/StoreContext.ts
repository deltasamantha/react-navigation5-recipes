import React from "react";
import AuthStore from "./AuthStore";

export class RootStore {
  authStore = new AuthStore(this);
}

export const rootStore = new RootStore();

const StoreContext = React.createContext(rootStore);

/**
 * Access any store from any react component using
 * this `useStore` hook
 */
export const useStore = () => React.useContext(StoreContext);
