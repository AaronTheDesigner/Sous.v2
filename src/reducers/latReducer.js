export default (state = {}, action) => {
	switch (action.type) {
		case "FETCH_LAT":
			return { ...action.payload };
		default:
			return state;
	}
};
