import React from "react";
import { connect } from "react-redux";
import { getLong, getLat } from "../actions";

class GeoLocation extends React.Component {
	componentDidMount = async () => {
		await this.props.getLat(this.props.lat);
		await this.props.getLong(this.props.long);
	};

	render() {
		const { lat } = this.props.lat;
		const { long } = this.props.long;
		return (
			<div>
				{long}, {lat}
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
)(GeoLocation);
