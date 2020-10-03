import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HomeListItem from "../HomeListItem/HomeListItem";

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
	//on image click, sends user to details page, send this movie info to details
	render() {
		console.log(this.props.reduxState);
		return (
			<div>
				<ul>
					{this.props.reduxState.map((movie) => (
						<HomeListItem key={movie.id} movie={movie} />
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
	id: reduxState.movies.id,
});
export default connect(mapStateToProps)(withRouter(HomePage));
