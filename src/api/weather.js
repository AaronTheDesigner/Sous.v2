import axios from "axios";

export default axios.create({
	baseURL: "https://openweathermap.org/api/data/2.5/weather?",
	headers: {
		zip: "28270"
	}
});
