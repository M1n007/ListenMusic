import { combineReducers } from "redux";

import nav from "./nav";
import musicPlayer from "../reducers/reducersMusicPlayer"

const rootReducers = combineReducers({
  nav,
  musicPlayer
});

export default rootReducers;
