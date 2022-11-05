import { LOGGING_IN } from "./Login.types";

const INITIAL_STATE = {
  IsLogin: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        IsLogin: action.payload.IsLogin,
      };
    default:
      return state;
  }
};

export default reducer;
