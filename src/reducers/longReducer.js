const initialState = {
	long: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_LONG":
			return {
				...state,
				long: action.payload
			};
		default:
			return state;
	}
};
