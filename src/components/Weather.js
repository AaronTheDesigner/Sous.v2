import React from "react";
import { connect } from "react-redux";
import { getLat, getLong } from "../actions";
import weather from "../api/weather";

class Weather extends React.Component {
	state = {
		weather: "",
		temp: "",
		lon: 0,
		lat: 0,
		city: "",
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

		this.setState({
			weather: response.data.weather[0].main,
			temp: response.data.main.temp,
			city: response.data.name
		});
	};

	renderLocation() {
		//if we don't have lat long set to loading
		if (
			this.state.lat === 0 &&
			this.state.lon === 0 &&
			this.state.city === ""
		) {
			return (
				<div>
					<p>Loading...</p>
				</div>
			);
		}

		return <div>{this.state.city}</div>;
	}

	renderWeather() {
		if (this.state.weather === "") {
			return <div>Loadding...</div>;
		}
		return <div>{this.state.weather}</div>;
	}

	convertToFeren() {
		// (306.07K − 273.15) × 9/5 + 32 = 91.256°F
		let kelvin = this.state.temp;
		let convert = ((kelvin - 273.15) * 9) / 5 + 32;
		let feren = Math.ceil(convert).toString();
		return feren;
	}

	render() {
		return (
			<div>
				<br />

				<br />
				{this.renderLocation()}
			</div>
		);
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
