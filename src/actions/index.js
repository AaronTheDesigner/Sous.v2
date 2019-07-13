import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = userId => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = userId => {
	return {
		type: SIGN_OUT,
		payload: userId
	};
};

export const getLat = () => {
	return {
		type: "GET_LAT",
		payload: 14.48739
	};
};

export const getLong = () => dispatch => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        dispatch({ type: "FETCH_LONG", payload: position.coords.longitude });
        res(position.coords.longitude);
      },
      error => {
        rej(error);
      }
    );
  })
};