import { STORE_PETUGAS, RESET_PETUGAS } from "./Petugas.types";

export const store_petugas = (payload) => {
  return {
    type: STORE_PETUGAS,
    payload: payload,
  };
};

export const reset_petugas = () => {
  return {
    type: RESET_PETUGAS,
  };
};
