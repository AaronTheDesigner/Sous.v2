import React, { useState, useEffect } from "react";
import { getInfo, getSummary } from "../../../api/recipe";
import { Link } from "react-router-dom";

const Detail = props => {
	const [id, setId] = useState(props.location.state.id);
	const [title, setTitle] = useState("");
	const [credits, setCredits] = useState("");
	const [image, setImage] = useState("");
	const [sourceUrl, setSourceUrl] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [instructions, setInstructions] = useState([]);
	const [summary, setSummary] = useState("");

	//const id = props.location.state.id;

	useEffect(() => {
		const detail = getInfo(id);
		const summary = getSummary(id);
		summary()
			.then(res => {
				const sum = res.data.summary;
				setSummary(sum);
			})
			.catch(err => {
				console.log(err);
			});
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
				const analyzedInstructions = res.data.analyzedInstructions;
				const instructions = analyzedInstructions[0].steps.map(step => {
					return {
						number: step.number,
						step: step.step
					};
				});
				setInstructions(instructions);
				setTitle(title);
				setCredits(credits);
				setImage(image);
				setSourceUrl(sourceUrl);
				setIngredients(ingredients);
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

	console.log(summary);

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
				<div className='container'>
					<div className='btn-group'>
						<Link to='/'>
							<button className='btn btn-outline-secondary'>Restart</button>
						</Link>

						<button className='btn btn-outline-secondary' onClick={goBack}>
							Gallery
						</button>
					</div>
				</div>
				<hr />
				<div className='contianer'>
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
				</div>

				<div
					id='collapseOne'
					className='collapse'
					aria-labelledby='headingOne'
					data-parent='#ingredients'>
					<div className='list-group-flush'>{renderIngredients()}</div>
				</div>

				<div
					id='collapseTwo'
					className='collapse'
					aria-labelledby='headingTwo'
					data-parent='#instructions'>
					<div className='list-group-flush'>{renderInstructions()}</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
