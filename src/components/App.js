import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Palette from "./palettes/Palette";
import Movie from "./movies/Movie";
import NotFound from "./pages/NotFound";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/palette/new" component={Create} />
				<Route exact path="/palette/:id" component={Palette} />
				<Route exact path="/movies/:movieName" component={Movie} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
