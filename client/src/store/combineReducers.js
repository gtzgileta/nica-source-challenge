import { combineReducers } from "redux";
import { reducer as Auth } from "./auth";
import { reducer as User } from "./user";
import { reducer as Video } from "./video";

export default combineReducers({
  Auth,
  User,
  Video,
});
