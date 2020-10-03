import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class HomeListItem extends Component {
	componentDidMount() {}
	sendToDeets = () => {
		console.log("movie id is:", this.props.movie.id);
		this.props.dispatch({
			type: "FETCH_IND_MOVIE",
			url: `/api/movie/${this.props.movie.id}`,
		});
		this.props.history.push("/Details");
	};
	render() {
		return (
			<div>
				<img
					onClick={this.sendToDeets}
					src={this.props.movie.poster}
					alt={this.props.movie.title}
				/>
			</div>
		);
	}
}

export default connect()(withRouter(HomeListItem));
