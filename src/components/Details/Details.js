import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./Details.css";
import Button from "@material-ui/core/Button";
class Details extends Component {
	componentDidMount() {
		this.props.dispatch({ type: "FETCH_IND_MOVIE" });
	}
	//brings user back to homepage
	backToList = () => {
		console.log("going back home");
		this.props.history.push("/");
	};
	render() {
		return (
			<div>
				{this.props.reduxState.map((movie) => (
					<div>
						<div>{movie.title}</div>
						<img src={movie.poster} />
						<div>Genre: {movie.name}</div>
						<div>{movie.description}</div>
						<Button
							variant='contained'
							color='secondary'
							onClick={this.backToList}>
							Back to List
						</Button>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (reduxState) => ({
	reduxState: reduxState.indMov,
});
export default connect(mapStateToProps)(withRouter(Details));
