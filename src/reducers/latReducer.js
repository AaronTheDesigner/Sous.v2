const initialState = {
	lat: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_LAT":
			return {
				...state,
				lat: action.payload
			};
		default:
			return state;
	}
};
