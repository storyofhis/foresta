import { STORE_PETUGAS, RESET_PETUGAS } from "./Petugas.types";

const INITIAL_STATE = {
  petugas: {
    username: null,
    password: null,
    npsn: null,
    tipe: null,
  },
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_PETUGAS:
      return {
        ...state,
        petugas: action.payload,
      };
    case RESET_PETUGAS:
      return {
        ...state,
        petugas: {
          username: null,
          password: null,
          npsn: null,
          tipe: null,
        },
      };

    default:
      return state;
  }
};

export default reducer;
