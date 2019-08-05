import React from "react";
import { Link } from "react-router-dom";

const Gallery = props => {
	const gallery = props.location.state.gallery;

	const goBack = () => {
		props.history.goBack();
	};

	const renderGallery = () => {
		return gallery.map(item => {
			return (
				<div key={item.id} className='card mb-3'>
					<img src={item.image} alt={item.title} className='card-image' />
					<div className='container'>
						<hr />
						<h5 className='card-title'>{item.title}</h5>
						<Link
							to={{
								pathname: "/detail",
								state: { id: item.id }
							}}>
							<button className='btn btn-outline-secondary'>Details</button>
						</Link>
						<hr />
					</div>
				</div>
			);
		});
	};

	return (
		<div className='container-fluid'>
			<button onClick={goBack} className='btn btn-outline-primary'>
				Restart
			</button>
			<hr />
			<div className='row'>
				<div className='col-sm' />
				{renderGallery()}
				<div className='col-sm' />
			</div>
		</div>
	);
};

export default Gallery;
