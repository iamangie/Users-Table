import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleWare from "redux-thunk";

import usersReducer from "./users/usersReducer";

const middlewares = [thunkMiddleWare];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  reducer: (state = {}) => state,
  usersPage: usersReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
export { store };
