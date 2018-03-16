import { createStore } from "redux"
import reducers from "../reducers"
/* 
export default function configureStore() {
  const store = createStore(reducers)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    //module.hot.accept()
    console.log("DUCK SAKE", this)

    module.hot.accept("../reducers", () => {
      console.log("FUCK SAKE")
      const nextRootReducer = require("../reducers").default
      //console.log(nextRootReducer.getState())
      console.log(store.getState().borekReducer)
      store.replaceReducer(nextRootReducer)

      //console.log(store.getState().borekReducer)
    })
  }

  //window.store = store
  return store
}
 */

export default (initialState = {}) => {
  const store = createStore(reducers, initialState)
  /* 
  if (module.hot) {
    module.hot.accept("../reducers", () => {
      import("../reducers").then(module => {
        console.log(createStore(module.default).getState())

        store.replaceReducer(module.default)
        store.dispatch({ type: "RESET" })

        console.log(store.getState())
      })
    })
  }
 */
  return store
}
