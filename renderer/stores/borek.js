import { createStore } from "redux";
import borek from "../reducers/borek";

export default function configureStore(initialState) {
  const store = createStore(borek, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("./renderer/reducers/borek");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
