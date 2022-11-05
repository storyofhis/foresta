import { combineReducers } from "redux";
import IsLogin from "./Login/Login.reducer";
import PetugasReducer from "./Petugas/Petugas.reducer";

export const rootReducer = combineReducers({
  login: IsLogin,
  petugas: PetugasReducer,
});
