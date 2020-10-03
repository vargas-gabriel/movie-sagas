import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

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
		console.log(this.props.reduxState);
		return (
			<div>
				{this.props.reduxState.map((movie) => (
					<div>
						<div>{movie.title}</div>
						<img src={movie.poster} />
						<div>{movie.description}</div>
					</div>
				))}
				<button onClick={this.backToList}>Back to List</button>
			</div>
		);
	}
}

const mapStateToProps = (reduxState) => ({
	reduxState: reduxState.indMov,
});
export default connect(mapStateToProps)(withRouter(Details));
