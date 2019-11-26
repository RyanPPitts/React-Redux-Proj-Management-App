import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

// combining the auth reducer and project reducer into one reducer called root reducer
// this way we can use the rootReducer in the index.js file.
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
