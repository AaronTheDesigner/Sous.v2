import React from "react";
//import { Link } from "react-router-dom";

//Components
import GoogleAuth from "./GoogleAuth";
//import GeoLocation from "./GeoLocation";
//import Weather from "./Weather";
//bring ^Weather^ back at a later time
import WeatherContext from "../contexts/WeatherContext";

class Header extends React.Component {
	static contextType = WeatherContext;
	render() {
		console.log(this.context);
		return (
			<div>
				<p> </p>
				<GoogleAuth />
			</div>
		);
	}
}

export default Header;
