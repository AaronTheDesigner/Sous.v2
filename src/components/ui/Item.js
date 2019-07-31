import React from "react";

const Item = props => {
	const item = props.item;
	return <div className='container'> {item} </div>;
};

export default Item;
