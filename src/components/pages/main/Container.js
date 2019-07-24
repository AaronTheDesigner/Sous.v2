import React from "react";
import Ingredients from "./Ingredients";
import AddIngredient from "./AddIngredient";
import { getArray, getSummary, getInfo } from "../../../api/recipe";

class Container extends React.Component {
	state = {
		ingredients: [],
		mainId: null,
		image: "",
		gallery: [{ id: 1, title: "ok", image: "http//ten.com" }]
	};

	deleteIngredient = id => {
		const ingredients = this.state.ingredients.filter(ingredient => {
			return ingredient.id !== id;
		});

		this.setState({
			ingredients
		});
	};

	addIngredient = ingredient => {
		ingredient.id = Math.random();
		let ingredients = [...this.state.ingredients, ingredient];
		this.setState({ ingredients });
		this.updateResults(ingredients);
	};

	updateResults = ingredients => {
		let search = this.state.ingredients.map(ingredient => {
			return ingredient.content;
		});
		getArray("", {
			params: {
				ingredients: search.join(", ")
			}
		}).then(res => {
			console.log(res.data);
		});
	};

	updateDetails = id => {
		let info = getInfo(id);
		info().then(res => {
			console.log(res.data);
			this.setState({ image: res.data.image });
		});
	};

	updateSummary = id => {
		let summary = getSummary(id);
		summary().then(res => {
			console.log(res.data);
		});
	};

	render() {
		console.log(this.state.gallery);
		return (
			<div>
				<AddIngredient addIngredient={this.addIngredient} />
				<Ingredients
					ingredients={this.state.ingredients}
					deleteIngredient={this.deleteIngredient}
				/>
			</div>
		);
	}
}

export default Container;
