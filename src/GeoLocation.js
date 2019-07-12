import React from "react";
import { connect } from "react-redux";
import { getLong, getLat } from "./actions";

class GeoLocation extends React.Component {
	componentDidMount = async () => {
		this.props.getLat();
		const myLong = await this.props.getLong();
		console.log(myLong);
	};

	render() {
		return <div>Location</div>;
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
