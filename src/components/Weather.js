import React from "react";
import { connect } from "react-redux";
import { getLat, getLong } from "../actions";
import weather from "../api/weather";

class Weather extends React.Component {
	state = {
		lon: null,
		lat: null,
		city: "",
		weather: "",
		temp: null,
		errorMessage: ""
	};

	componentDidMount = async () => {
		const newLong = await this.props.getLong(this.props.long);
		const newLat = await this.props.getLat(this.props.lat);
		await this.setState({ lon: newLong });
		await this.setState({ lat: newLat });
		const response = await weather.get("/weather?", {
			params: {
				lon: newLong,
				lat: newLat
			}
		});
		const convert = ((response.data.main.temp - 273.15) * 9) / 5 + 32;
		const fer = Math.ceil(convert);
		this.setState({
			weather: response.data.weather[0].main,
			temp: fer,
			city: response.data.name
		});
	};

	renderAll() {
		if (
			this.state.lat === 0 &&
			this.state.lon === 0 &&
			this.state.city === "" &&
			this.state.city === "" &&
			this.state.temp === null
		) {
			return <div>Retrieving Data...</div>;
		}
		return (
			<div>
				{this.state.lat} | {this.state.lon} | {this.state.city} |{" "}
				{this.state.weather} | {this.state.temp}
			</div>
		);
	}

	// convertToFeren() {
	// 	// (306.07K − 273.15) × 9/5 + 32 = 91.256°F
	// 	let kelvin = this.state.temp;
	// 	let convert = ((kelvin - 273.15) * 9) / 5 + 32;
	// 	let feren = Math.ceil(convert).toString();
	// 	return feren;
	// }
	// renderTemp() {
	// 	let kelvin = response.data.main.temp;
	// 	let convert = ((kelvin - 273.15) * 9) / 5 + 32;
	// 	let string = Math.ceil(convert).toString();
	// 	this.setState({ temp: string });
	// }

	render() {
		return <div>{this.renderAll()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		long: state.long,
		lat: state.lat
	};
};

export default connect(
	mapStateToProps,
	{ getLong, getLat }
)(Weather);
