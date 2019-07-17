import React, { useState } from "react";

const IngForm = ({ addIngredient }) => {
	const [value, setValue] = useState("");

	const handleSubmit = event => {
		event.preventDefault();
		if (!value) return;
		addIngredient(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				className='input'
				value={value}
				placeholder='Add Ingredients...'
				onChange={event => setValue(event.target.value)}
			/>
		</form>
	);
};

export default IngForm;
