import React from "react";
import { connect } from "react-redux";
import { addIngredient, deleteIngredient } from "../../../actions";
//import "./Main.css";

//Components
import Main from "./Main";
//import Item from "../../ui/Item";

class Container extends React.Component {
	state = {
		ingredient: "",
		message: "Enter Ingredients"
	};

	handleChange = event => {
		const { value } = event.target;
		this.setState(() => ({ ingredient: value }));
	};

	handleSubmit = event => {
		event.preventDefault();
		if (this.state.ingredient === "") {
			this.setState({ message: "Please enter an ingredient..." });
		} else {
			const { ingredient } = this.state;
			this.props.addIngredient(ingredient);
			this.setState(() => ({
				ingredient: ""
			}));
		}
	};

	handleRemove = ingredientIndex => () => {
		this.props.deleteIngredient(ingredientIndex);
	};

	renderIngredientList = ingredientList =>
		ingredientList.map((ingredient, key) => (
			<li
				className='list-group-item'
				key={key}
				onClick={this.handleRemove(key)}>
				<p>{ingredient}</p>
			</li>
		));

	render() {
		const { ingredient } = this.state;
		const { ingredientList } = this.props;
		return (
			<div className='row'>
				<div className='col-lg-4'>
					<div className='card'>
						<Main submit={this.handleSubmit} />
						<div className='container'>
							<form onSubmit={this.handleSubmit}>
								<div className='input-group mb-3'>
									{" "}
									<input
										type='text'
										className='form-control'
										onChange={this.handleChange}
										value={ingredient}
										placeholder={this.state.message}
										name='ingredient'
									/>
									<div className='input-group-append'>
										<button
											className='btn btn-outline-secondary'
											onClick={this.handleSubmit}>
											Add
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className='list-group list-group-flush'>
							{ingredientList && this.renderIngredientList(ingredientList)}
						</div>
					</div>
				</div>
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
