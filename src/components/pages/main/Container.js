import React from "react";
import Ingredients from "./Ingredients";
import AddIngredient from "./AddIngredient";

class Container extends React.Component {
	state = {
		ingredients: [{ id: 1, content: "beef" }, { id: 2, content: "relish" }]
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
	};
	render() {
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
