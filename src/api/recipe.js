import axios from "axios";

export const getArray = axios.create({
	baseURL: "https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?",
	headers: {
		"X-RapidAPI-Host": "webknox-recipes.p.rapidapi.com",
		"X-RapidAPI-Key": "1c2cf24d80mshe26d649e9c33c16p1badf9jsnb49856e27d31"
	}
});

export const getInfo = id =>
	axios.create({
		baseURL: `https://webknox-recipes.p.rapidapi.com/recipes/${id}/information`,
		headers: {
			"X-RapidAPI-Host": "webknox-recipes.p.rapidapi.com",
			"X-RapidAPI-Key": "1c2cf24d80mshe26d649e9c33c16p1badf9jsnb49856e27d31"
		}
	});

export const getSummary = id =>
	axios.create({
		baseURL: `https://webknox-recipes.p.rapidapi.com/recipes/${id}/summary`,
		headers: {
			"X-RapidAPI-Host": "webknox-recipes.p.rapidapi.com",
			"X-RapidAPI-Key": "1c2cf24d80mshe26d649e9c33c16p1badf9jsnb49856e27d31"
		}
	});
