import React, { useState, useEffect } from "react";
import { getInfo } from "../../../api/recipe";

const Detail = props => {
	const [id, setId] = useState(props.location.state.id);
	const [title, setTitle] = useState("");
	const [credits, setCredits] = useState("");
	const [image, setImage] = useState("");
	const [sourceUrl, setSourceUrl] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [instructions, setInstructions] = useState([]);

	//const id = props.location.state.id;

	useEffect(() => {
		const detail = getInfo(id);
		detail().then(res => {
			const title = res.data.title;
			const credits = res.data.creditsText;
			const image = res.data.image;
			const sourceUrl = res.data.sourceUrl;
			const extendedIngredients = res.data.extendedIngredients;
			const ingredients = extendedIngredients.map(ingredient => {
				return {
					name: ingredient.name,
					id: ingredient.id,
					aisle: ingredient.aisle
				};
			});
			const analyzedInstructions = res.data.analyzedInstructions[0].steps;
			const instructions = analyzedInstructions.map(step => {
				return {
					number: step.number,
					step: step.step
				};
			});
			console.log(title, credits, image, ingredients, sourceUrl, instructions);
			setTitle(title);
			setCredits(credits);
			setImage(image);
			setSourceUrl(sourceUrl);
			setIngredients(ingredients);
			setInstructions(instructions);
		});
	}, []);

	// const insArray = [
	// 	{
	// 		number: 1,
	// 		step:
	// 			"Brush bread with 2 tbsp. olive oil and broil until golden, turning once, 5 minutes."
	// 	},
	// 	{
	// 		number: 2,
	// 		step:
	// 			"In a frying pan over medium heat, saut onion with remaining oil until golden."
	// 	},
	// 	{ number: 3, step: "Add apple and syrup; cook 5 minutes." },
	// 	{
	// 		number: 4,
	// 		step:
	// 			"Let cool slightly. Stir in cherries, horseradish, and cheese; spoon over toasts. Top with nuts."
	// 	}
	// ];

	// const map = insArray.map(ins => {
	// 	return { key: ins.number, step: ins.step };
	// });

	// useEffect(() => {
	// 	// Should not ever set state during rendering, so do this in useEffect instead.
	// 	setInstructions(map);
	// }, []);

	console.log(id, title, credits, image, ingredients, sourceUrl, instructions);
	return <div>Detail Array test</div>;
};

export default Detail;
