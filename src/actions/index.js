import { SIGN_IN, SIGN_OUT } from "./types";

//__Authentication__\\

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

//__Location__\\

export const getLat = () => dispatch => {
	return new Promise((res, rej) => {
		navigator.geolocation.getCurrentPosition(
			position => {
				dispatch({ type: "FETCH_LAT", payload: position.coords.latitude });
				res(position.coords.latitude);
			},
			error => {
				rej(error);
			}
		);
	});
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
	});
};

export const addIngredient = ingredient => ({
	type: "ADD_INGREDIENT",
	ingredient
});

export const deleteIngredient = ingredientIndex => ({
	type: "DELETE_INGREDIENT",
	ingredientIndex
});
