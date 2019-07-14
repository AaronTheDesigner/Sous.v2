import React from "react";
import weather from "./api/weather";

class Weather extends React.Component {
	state = {
		weather: "",
		temp: "",
		errorMessage: ""
	};

	componentDidMount = async () => {
		const response = await weather.get("/weather?", {
			params: {
				lon: -80.75,
				lat: 35.11,
				appid: "136baf51a66932d675aebad2a07696bc"
			}
		});
		console.log(response.data.weather[0].main);
		this.setState({
			weather: response.data.weather[0].main,
			temp: response.data.main.temp
		});
	};

	render() {
		return (
			<div>
				<p>
					{" "}
					{this.state.weather}, {this.state.temp}{" "}
				</p>
			</div>
		);
	}
}

export default Weather;
