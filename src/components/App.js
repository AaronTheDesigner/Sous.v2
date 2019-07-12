import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Page Components
import Main from "./pages/main";
import Detail from "./pages/detail";
import List from "./pages/list";
import Header from "./Header";

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
