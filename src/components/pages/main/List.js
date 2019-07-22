import React, { useState } from "react";
import { getArray, getInfo, getSummary } from "../../../api/recipe";

import Ingredient from "./Ingredient";
import IngForm from "./IngForm";

const List = props => {
	const [ingredients, setIngredients] = useState([]);

	const addIngredient = text => {
		const newIngredients = [...ingredients, { text }];
		setIngredients(newIngredients);
	};

	const deleteIngredient = index => {
		const newIngredients = [...ingredients];
		newIngredients.splice(index, 1);
		setIngredients(newIngredients);
	};

	const ing = ingredients.map(ingredient => {
		return ingredient.text;
	});

	console.log(ing.join(", "));

	getArray
		.get("", {
			params: {
				ingredients: ing.join(", ")
			}
		})
		.then(res => {
			console.log(res.data);
		});

	console.log(ingredients);
	console.log(
		ingredients.map(ingredient => {
			return ingredient.text;
		})
	);

	return (
		<div className='app'>
			<div className='ing-list'>
				{ingredients.map((ingredient, index) => (
					<Ingredient
						key={index}
						index={index}
						ingredient={ingredient}
						deleteIngredient={deleteIngredient}
					/>
				))}
				<IngForm addIngredient={addIngredient} />
			</div>
		</div>
	);
};

export default List;
