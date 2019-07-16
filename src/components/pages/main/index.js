import React from "react";
import { getArray, getInfo, getSummary } from "../../../api/recipe";

const Main = () => {
	getArray
		.get("", {
			params: {
				number: 6,
				ingredients: "apples, cinnamon, sugar"
			}
		})
		.then(res => {
			console.log("getArray", res.data[0].id);
			getInfo(res.data[0].id)
				.get("", {})
				.then(res => {
					console.log("getInfo", res);
				})
				.catch(err => {
					console.log(err);
				});
			getSummary(res.data[0].id)
				.get("", {})
				.then(res => {
					console.log("getSummary", res);
				})
				.catch(err => {
					console.log(err);
				});
		})
		.catch(err => {
			console.log(err);
		});

	// getInfo(1065724)
	// 	.get("", {})
	// 	.then(res => {
	// 		console.log("getInfo", res);
	// 	});

	// getSummary(1065724)
	// 	.get("", {})
	// 	.then(res => {
	// 		console.log("getSummary", res);
	// 	});

	return <div>Main</div>;
};

export default Main;
