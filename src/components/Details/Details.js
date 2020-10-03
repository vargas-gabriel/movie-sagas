import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Details extends Component {
	//brings user back to homepage
	backToList = () => {
		console.log("going back home");
		this.props.history.push("/");
	};
	render() {
		return (
			<div>
				<h1>We're in Details!</h1>
				<button onClick={this.backToList}>Back to List</button>
			</div>
		);
	}
}

export default connect()(withRouter(Details));
