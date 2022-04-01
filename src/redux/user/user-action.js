import userType from "./user-type";

export const emailSigninStart = (emailAndPassword) => ({
  type: userType.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const signUpStart = (userCredential) => ({
  type: userType.SIGNING_UP_START,
  payload: userCredential,
});
