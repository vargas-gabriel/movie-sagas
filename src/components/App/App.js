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
					<header className='App-header'>
						<h1>Movies</h1>
					</header>
					<nav>
						<main>
							<ul>
								<li>
									<Link to='/MovieForm'>Add a Movie</Link>
								</li>
							</ul>
						</main>
					</nav>
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
