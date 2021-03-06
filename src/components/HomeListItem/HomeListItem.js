import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./HomeListItem.css";
import Card from "@material-ui/core/Card";
class HomeListItem extends Component {
	componentDidMount() {}
	//on image click, sends user to details page, sends this movie info to details
	sendToDeets = () => {
		console.log("movie id is:", this.props.movie.id);
		this.props.dispatch({
			//sends to individual movie reducer
			type: "FETCH_IND_MOVIE",
			//sends the individual movie url
			url: `/api/movie/${this.props.movie.id}`,
		});
		this.props.history.push("/Details");
	};

	render() {
		return (
			<ul>
				<li className='li'>
					<Card variant='outlined'>
						<img
							onClick={this.sendToDeets}
							src={this.props.movie.poster}
							alt={this.props.movie.title}
						/>
					</Card>
				</li>
			</ul>
		);
	}
}

export default connect()(withRouter(HomeListItem));
