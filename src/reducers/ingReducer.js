// if you want to show initial data :)
const INITIAL_DATA = [
	{
		id: 0,
		text: "corn"
	},
	{
		id: 1,
		text: "beans"
	}
];

import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "../actions/types";

const IngredientReducer = (state = INITIAL_DATA, action) => {
	switch (action.type) {
		case ADD_INGREDIENT:
			return [
				...state,
				{
					id: action.id,
					text: action.text
				}
			];
		case REMOVE_INGREDIENT:
			const numIndex = parseInt(action.id);
			return state.filter(ingredient => ingredient.id !== numIndex);
		default:
			return state;
	}
};

export default IngredientReducer;
