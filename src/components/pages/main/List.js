import React, { useState } from "react";

import Ingredient from "./Ingredient";
import IngForm from "./IngForm";

const List = () => {
	const [ingredients, setIngredients] = useState([
		{
			text: "cherry",
			eliminate: false
		},
		{
			text: "brown sugar",
			eliminate: false
		},
		{
			text: "chocolate",
			eliminate: false
		}
	]);

	const addIngredient = text => {
		const newIngredients = [...ingredients, { text }];
		setIngredients(newIngredients);
	};

	const deleteIngredient = index => {
		const newIngredients = [...ingredients];
		newIngredients.splice(index, 1);
		setIngredients(newIngredients);
	};

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
