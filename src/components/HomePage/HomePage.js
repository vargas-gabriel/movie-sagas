import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class HomePage extends Component {
	componentDidMount() {
		console.log("component mounted homepage");
		this.getMovies();
	}
	//gets movies from db, renders to DOM
	getMovies = () => {
		console.log("getting movies, yo");
		this.props.dispatch({ type: "FETCH_MOVIES" });
	};
	render() {
		console.log(this.props.reduxState);
		return (
			<div>
				<h1>We're in HomePage!</h1>
				<ul>
					{this.props.reduxState.map((movie) => (
						<li key={movie.id}>
							Movie: {movie.title} Description: {movie.description}{" "}
							{movie.poster}
						</li>
					))}
				</ul>
			</div>
		);
	}
}
const mapStateToProps = (reduxState) => ({
	reduxState: reduxState.movies,
	title: reduxState.movies.title,
	poster: reduxState.movies.poster,
	description: reduxState.movies.description,
});
export default connect(mapStateToProps)(withRouter(HomePage));
