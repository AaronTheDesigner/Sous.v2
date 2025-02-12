import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getLong, getLat } from "../actions";
//import weather from "../api/weather";

//Page Components
//import Main from "./pages/main";
import Container from "./pages/main";
import Detail from "./pages/detail";
import Gallery from "./pages/gallery";
//import GoogleAuth from "./GoogleAuth";

class App extends React.Component {
	// state = {
	// 	lon: null,
	// 	lat: null,
	// 	city: "",
	// 	weather: "",
	// 	temp: null,
	// 	errorMessage: ""
	// };

	// componentDidMount = async () => {
	// 	const newLong = await this.props.getLong(this.props.long);
	// 	const newLat = await this.props.getLat(this.props.lat);
	// 	await this.setState({ lon: newLong });
	// 	await this.setState({ lat: newLat });
	// 	const response = await weather.get("/weather?", {
	// 		params: {
	// 			lon: newLong,
	// 			lat: newLat
	// 		}
	// 	});
	// 	const convert = ((response.data.main.temp - 273.15) * 9) / 5 + 32;
	// 	const fer = Math.ceil(convert);
	// 	this.setState({
	// 		weather: response.data.weather[0].main,
	// 		temp: fer,
	// 		city: response.data.name
	// 	});
	// };

	render() {
		return (
			<div className='container-fluid'>
				<BrowserRouter>
					<Route path='/' exact render={() => <Container />} />
					<Route path='/detail' component={Detail} />
					<Route path='/gallery' component={Gallery} />
				</BrowserRouter>
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
)(App);
