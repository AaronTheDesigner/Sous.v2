import React from "react";

class GeoLocation extends React.Component {
	state = {
		lat: null,
		long: null,
		errorMessage: ""
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position =>
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude
				}),
			err => this.setState({ errorMessage: err.message })
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat && !this.state.long) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat && this.state.long) {
			return (
				<div>
					Location {this.state.lat}, {this.state.long}{" "}
				</div>
			);
		}

		return <div>Seeking Location...</div>;
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default GeoLocation;
