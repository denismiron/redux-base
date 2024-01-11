import { combineReducers, legacy_createStore as createStore } from "redux";
import { cashReducer } from "./cashReducer";
import { customerReducer } from "./customReducer";

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
