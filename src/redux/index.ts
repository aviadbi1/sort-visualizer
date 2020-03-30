import { createStore, combineReducers } from "redux";

import sortReducer from "./sort/reducer";

const rootReducer = combineReducers({
  sort: sortReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
