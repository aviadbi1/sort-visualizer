// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import sortReducer from "./sort/reducer";

const rootReducer = combineReducers({
  sort: sortReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      // applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
}
