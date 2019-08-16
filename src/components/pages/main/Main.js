import React from "react";
import { connect } from "react-redux";
import { getArray } from "../../../api/recipe";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/placeholder.jpg";
import "./Main.css";

class Main extends React.Component {
	state = {
		title: "",
		id: null,
		image: "",
		gallery: [],
		message: "What's in your fridge, or on your shopping list?"
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
					console.log(err);
				});
		}
	}

	renderIntro() {
		return (
			<div className='list-group list-group-flush'>
				<li className='list-group-item'>{this.state.message}</li>
			</div>
		);
	}

	renderImage = () => {
		const title = this.state.title;
		const image = this.state.image;
		if (image === "") {
			return (
				<div className='container'>
					<img className='img-fluid' src={placeholder} alt='placeholder' />
					{this.renderIntro()}
				</div>
			);
		}

		return (
			<div>
				<div className='container-fluid'>
					<h5 className='card-title'>{this.state.title}</h5>
					<img className='card-img top' src={image} alt={title} />
				</div>
				<div className='container'>
					<Link
						to={{
							pathname: "/gallery",
							state: { gallery: this.state.gallery }
						}}>
						<button className='btn btn-outline-secondary'>
							Gallery{" "}
							<span className='badge badge-light'>
								{this.state.gallery.length}
							</span>
						</button>
					</Link>
					<Link
						to={{
							pathname: "/detail",
							state: { id: this.state.id }
						}}>
						<button className='btn btn-outline-secondary'>Detail</button>
					</Link>
				</div>
				<br />
			</div>
		);
	};

	render() {
		return <div>{this.renderImage()}</div>;
	}
}

const mapStateToProps = state => {
	return { ingredientList: state.ing };
};

export default connect(mapStateToProps)(Main);
