import React from "react";
//import { Link } from "react-router-dom";

//Components
import GoogleAuth from "./GoogleAuth";
//import GeoLocation from "./GeoLocation";
import Weather from "./Weather";

const Header = () => {
	return (
		<div>
			<GoogleAuth />
			<Weather />
		</div>
	);
};

export default Header;
