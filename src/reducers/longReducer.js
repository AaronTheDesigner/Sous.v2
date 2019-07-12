export default (state = {}, action) => {
	switch (action.type) {
		case "FETCH_LONG":
			return { ...action.payload };
		default:
			return state;
	}
};
