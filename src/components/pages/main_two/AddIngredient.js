import React from "react";

class AddIngredient extends React.Component {
	state = {
		content: ""
	};

	onChange = event => {
		this.setState({
			content: event.target.value
		});
	};

	onSubmit = event => {
		event.preventDefault();
		this.props.addIngredient(this.state);
		this.setState({
			content: ""
		});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input
						type='text'
						onChange={this.onChange}
						value={this.state.content}
					/>
				</form>
			</div>
		);
	}
}

export default AddIngredient;
