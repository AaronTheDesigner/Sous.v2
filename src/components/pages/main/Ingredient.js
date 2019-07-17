import React from "react";

const Ingredient = ({ ingredient, index, deleteIngredient }) => {
	return (
		<div>
			<div className='ingredient'>{ingredient.text}</div>
			<div>
				<button onClick={() => deleteIngredient(index)}>X</button>
			</div>
		</div>
	);
};

export default Ingredient;
