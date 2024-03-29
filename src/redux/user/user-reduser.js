import userType from "./user-type";
const INITIAL_STATE = {
  currentuser: null,
};

const userReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userType.EMAIL_SIGNIN_START:
      return {
        ...state,
        currentuser: action.payload,
      };
    // case userType.SIGN_OUT_SUCCESS:
    //   return {
    //     ...state,
    //     currentuser: null,
    //     errmessage: null,
    //   };
    // case userType.SIGNIN_FAILURE:
    // case userType.SIGN_OUT_FAILURE:
    // case userType.SIGNING_UP_FAILURE:
    //   return {
    //     ...state,
    //     errmessage: action.payload,
    //   };
    default:
      return state;
  }
};
export default userReduser;
