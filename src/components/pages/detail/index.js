import React, { useState, useEffect } from "react";
import { getInfo } from "../../../api/recipe";
import { Link } from "react-router-dom";

const Detail = props => {
	//const [id, setId] = useState(null);
	const [title, setTitle] = useState("");
	const [credits, setCredits] = useState("");
	const [image, setImage] = useState("");
	const [sourceUrl, setSourceUrl] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [instructions, setInstructions] = useState([]);

	const id = props.location.state.id;

	useEffect(() => {
		const detail = getInfo(id);
		detail()
			.then(res => {
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
				console.log(
					title,
					credits,
					image,
					ingredients,
					sourceUrl,
					instructions
				);
				setTitle(title);
				setCredits(credits);
				setImage(image);
				setSourceUrl(sourceUrl);
				setIngredients(ingredients);
				setInstructions(instructions);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const goBack = () => {
		props.history.goBack();
	};

	return (
		<div>
			Detail
			<br />
			<button>
				<Link to={{ pathname: "/" }}>Main</Link>
			</button>
			<br />
			<button onClick={goBack}>Gallery</button>
		</div>
	);
};

export default Detail;
