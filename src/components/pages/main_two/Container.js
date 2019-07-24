import React from "react";
import { connect } from "react-redux";
import { addIngredient, deleteIngredient } from "../../../actions";

class Container extends React.Component {
	state = {
		ingredient: ""
	};

	handleChange = event => {
		const { value } = event.target;
		this.setState(() => ({ ingredient: value }));
	};

	handleSubmit = event => {
		event.preventDefault();
		const { ingredient } = this.state;
		this.props.addIngredient(ingredient);
		this.setState(() => ({
			ingredient: ""
		}));
	};

	handleRemove = ingredientIndex => () => {
		this.props.deleteIngredient(ingredientIndex);
	};

	renderIngredientList = ingredientList =>
		ingredientList.map((ingredient, key) => (
			<div key={key}>
				{ingredient}
				<button onClick={this.handleRemove(key)}>X</button>
			</div>
		));

	render() {
		const { ingredient } = this.state;
		const { ingredientList } = this.props;
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

const mapStateToProps = state => ({
	ingredientList: state.ing
});

const mapDispatchToProps = dispatch => ({
	addIngredient: ingredient => dispatch(addIngredient(ingredient)),
	deleteIngredient: ingredientIndex =>
		dispatch(deleteIngredient(ingredientIndex))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Container);
