import { createStore } from "redux"
import reducers from "../reducers"
/* 
export default function configureStore() {
  const store = createStore(borekReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    //module.hot.accept()
    console.log("DUCK SAKE", this)

    module.hot.accept("../borek/borekReducer.js", () => {
      console.log("FUCK SAKE")
      const nextRootReducer = require("../borek/borekReducer.js").default
      console.log(nextRootReducer)
      console.log(store.getState())
      store.replaceReducer(nextRootReducer)
      store.dispatch({ type: "RESET" })
      console.log(store.getState())

    })
  }

  window.store = store
  return store
}
 */

export default (initialState = {}) => {
  const store = createStore(reducers, initialState)

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      import("./borekReducer").then(module => {
        console.log(createStore(module.default).getState())

        store.replaceReducer(module.default)
        store.dispatch({ type: "RESET" })
        store.console.log(store.getState())
      })
    })
  }

  return store
}
