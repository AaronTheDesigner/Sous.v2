import React from "react";

class Weather extends React.Component {
	state = {
		weather: "",
		errorMessage: ""
	};

	render() {
		return (
			<div>
				<p>Weather Report</p>
			</div>
		);
	}
}

export default Weather;
