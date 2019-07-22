import React from "react";

const Ingredients = ({ ingredients, deleteIngredient }) => {
	const ingredientList = ingredients.length ? (
		ingredients.map(ingredient => {
			return (
				<div
					key={ingredient.id}
					onClick={() => {
						deleteIngredient(ingredient.id);
					}}>
					{ingredient.content}
				</div>
			);
		})
	) : (
		<div>Enter Ingredients..</div>
	);
	return <div>{ingredientList}</div>;
};

export default Ingredients;
