// if you want to show initial data :)

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "ADD_INGREDIENT":
			state = [...state, action.ingredient];
			break;
		case "DELETE_INGREDIENT":
			state = [
				...state.filter((ingredient, index) => index !== action.ingredientIndex)
			];
			break;
		default:
			return state;
	}
	return state;
};
