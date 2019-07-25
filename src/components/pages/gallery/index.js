import React from "react";
import { Link } from "react-router-dom";

const Gallery = props => {
	const gallery = props.location.state.gallery;

	const renderGallery = () => {
		return gallery.map(item => {
			return (
				<div key={item.id}>
					<img src={item.image} alt={item.title} />
					<span>{item.title}</span>
					<Link
						to={{
							pathname: "/detail",
							state: { id: item.id }
						}}>
						Details
					</Link>
				</div>
			);
		});
	};

	return <div>{renderGallery()}</div>;
};

export default Gallery;
