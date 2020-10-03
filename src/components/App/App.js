import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage/HomePage";
import Details from "../Details/Details";
import MovieForm from "../MovieForm/MovieForm";

class App extends Component {
	// Renders the entire app on the DOM
	render() {
		return (
			<Router>
				<div className='App'>
					<h1>Movies</h1>
					<Route path='/' exact>
						<HomePage />
					</Route>
					<Route path='/Details'>
						<Details />
					</Route>
					<Route path='/MovieForm'>
						<MovieForm />
					</Route>
				</div>
			</Router>
		);
	}
}

export default App;
