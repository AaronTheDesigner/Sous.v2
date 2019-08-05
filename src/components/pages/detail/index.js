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

	const renderIngredients = () => {
		return ingredients.map(ingredient => {
			return (
				<li key={ingredient.id} className='list-group-item'>
					{ingredient.name}/{ingredient.aisle}
				</li>
			);
		});
	};

	const renderInstructions = () => {
		return instructions.map(instruction => {
			return (
				<li key={instruction.number} className='list-group-item'>
					{instruction.step}
				</li>
			);
		});
	};

	return (
		<div>
			<div className='card mb-3'>
				<img src={image} alt='' className='card-img-top' />
				<div className='container'>
					<div className='card-content'>
						<h5 className='card-title'>
							{title} by{" "}
							<a href={sourceUrl} className='card-link'>
								{credits}
							</a>{" "}
						</h5>
					</div>
				</div>
				<div className='accordion' id='ingredients'>
					<div className='card'>
						<div className='card-header'>
							<h2 className='mb-0'>
								<button
									className='btn'
									type='button'
									data-toggle='collapse'
									data-target='#collapseOne'
									aria-expanded='true'
									aria-controls='collapseOne'>
									Ingredients
								</button>
							</h2>
						</div>
					</div>
				</div>
				<div className='accordion' id='instructions'>
					<div className='card'>
						<div className='card-header'>
							<h2 className='mb-0'>
								<button
									className='btn'
									type='button'
									data-toggle='collapse'
									data-target='#collapseTwo'
									aria-expanded='true'
									aria-controls='collapseTwo'>
									Instructions
								</button>
							</h2>
						</div>
					</div>
				</div>

				<div
					id='collapseOne'
					class='collapse'
					aria-labelledby='headingOne'
					data-parent='#ingredients'>
					<div class='list-group-flush'>{renderIngredients()}</div>
				</div>

				<div
					id='collapseTwo'
					class='collapse'
					aria-labelledby='headingTwo'
					data-parent='#instructions'>
					<div class='list-group-flush'>{renderInstructions()}</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
