import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./HomeListItem.css";
import Card from "@material-ui/core/Card";
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
				<div className='div'>
					<Card variant='outlined'>
						<img
							onClick={this.sendToDeets}
							src={this.props.movie.poster}
							alt={this.props.movie.title}
						/>
					</Card>
				</div>
			</div>
		);
	}
}

export default connect()(withRouter(HomeListItem));
