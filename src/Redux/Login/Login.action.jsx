import { LOGGING_IN } from "./Login.types";

export const loggingIn = (login) => {
  return {
    type: LOGGING_IN,
    payload: {
      IsLogin: login,
    },
  };
};
