import axios from "axios";

export default axios.create({
	baseURL: "http://api.openweathermap.org/data/2.5",
	headers: {
		"content-type": "application/json; charset=utf-8"
	}
});
