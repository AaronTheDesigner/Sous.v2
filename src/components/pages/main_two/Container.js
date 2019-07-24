import React from "react";

class Container extends React.Component {
	state = {
		ingredient: "",
		ingredientList: []
	};

	handleChange = event => {
		const { value } = event.target;
		this.setState(() => ({ ingredient: value }));
	};

	handleSubmit = event => {
		event.preventDefault();
		const { ingredient, ingredientList } = this.state;
		this.setState(() => ({
			ingredientList: [...ingredientList, ingredient],
			ingredient: ""
		}));
	};

	handleRemove = ingredientIndex => () => {
		const { ingredientList } = this.state;
		this.setState(() => ({
			ingredientList: ingredientList.filter(
				(value, index) => index !== ingredientIndex
			)
		}));
	};

	renderIngredientList = ingredientList =>
		ingredientList.map((ingredient, key) => (
			<div key={key}>
				{ingredient}
				<button onClick={this.handleRemove(key)}>Remove</button>
			</div>
		));

	render() {
		const { ingredient, ingredientList } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type='text'
						onChange={this.handleChange}
						value={ingredient}
						placeholder='Enter Ingredient'
						name='ingredient'
					/>
					<button onClick={this.handleSubmit}>Add</button>
				</form>
				{ingredientList && this.renderIngredientList(ingredientList)}
			</div>
		);
	}
}

export default Container;
