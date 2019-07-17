import React from "react";
import { getArray, getInfo, getSummary } from "../../../api/recipe";

//Components
import List from "./List";
import Pic from "./Pic";

const Main = props => {
	console.log(props);
	return (
		<div>
			Main
			<Pic />
			<List />
		</div>
	);
};

export default Main;
