import axios from "axios";

export default axios.create({
	baseURL: "https://community-open-weather-map.p.rapidapi.com",
	headers: {
		"content-type": "application/json; charset=utf-8",
		"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
		"X-RapidAPI-Key": "1c2cf24d80mshe26d649e9c33c16p1badf9jsnb49856e27d31"
	}
});
