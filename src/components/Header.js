import React from "react";
//import { Link } from "react-router-dom";

//Components
import GoogleAuth from "./GoogleAuth";
//import GeoLocation from "./GeoLocation";
//import Weather from "./Weather";
//bring ^Weather^ back at a later time

class Header extends React.Component {
	render() {
		return (
			<div>
				<p> </p>
				<GoogleAuth />
			</div>
		);
	}
}

export default Header;
