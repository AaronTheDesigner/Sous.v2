import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Page Components
import Main from "./pages/main";
import Detail from "./pages/detail";
import List from "./pages/list";
import Header from "./Header";
import axios from "axios";

axios
	.get(
		"http://api.openweathermap.org/data/2.5/weather?lat=-80.755&lon=35.114&appid=136baf51a66932d675aebad2a07696bc"
	)
	.then(res => {
		console.log(res);
	});

const App = () => {
	return (
		<div>
			<Header />
			<BrowserRouter>
				<Route path='/' exact component={Main} />
				<Route path='/detail' component={Detail} />
				<Route path='/list' component={List} />
			</BrowserRouter>
		</div>
	);
};

export default App;
