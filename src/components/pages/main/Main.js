import React from "react";
import { connect } from "react-redux";
import { getArray } from "../../../api/recipe";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/placeholder.jpg";

class Main extends React.Component {
	state = {
		title: "",
		id: null,
		image: "",
		gallery: []
	};

	componentDidUpdate(prevProps) {
		if (this.props.ingredientList !== prevProps.ingredientList) {
			const search = this.props.ingredientList.join(", ");
			getArray("", {
				params: {
					ingredients: search,
					number: 6
				}
			})
				.then(res => {
					const title = res.data[0].title;
					const id = res.data[0].id;
					const image = res.data[0].image;
					const gallery = res.data.map(item => {
						return { title: item.title, image: item.image, id: item.id };
					});

					this.setState({ title, id, gallery, image });
				})
				.catch(err => {
					if (err) {
						console.log("continue to enter ingredients");
					}
				});
		}
	}

	renderImage = () => {
		const title = this.state.title;
		const image = this.state.image;
		if (image === "") {
			return (
				<div>
					<img className='img-fluid' src={placeholder} alt='placeholder' />
				</div>
			);
		}

		return (
			<div>
				<h5>{this.state.title}</h5>
				<img className='img-fluid' src={image} alt={title} />
			</div>
		);
	};

	render() {
		console.log(placeholder);
		return (
			<div>
				{this.renderImage()}

				<Link
					to={{
						pathname: "/gallery",
						state: { gallery: this.state.gallery }
					}}>
					Gallery
				</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { ingredientList: state.ing };
};

export default connect(mapStateToProps)(Main);
