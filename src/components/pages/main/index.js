import React from "react";

//Components
import List from "./List";
import Pic from "./Pic";

const Main = props => {
	return (
		<div>
			Main
			<Pic />
			<List now={props} />
		</div>
	);
};

export default Main;
