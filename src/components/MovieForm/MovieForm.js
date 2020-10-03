import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class MovieForm extends Component {
	//brings user back to homepage
	cancel = () => {
		console.log("canceled, going back home");
		this.props.history.push("/");
	};
	//saves user input-sends to db, then sends user back to homepage
	saveMovie = () => {
		console.log("saving movie");
		this.props.history.push("/");
	};
	render() {
		return (
			<div>
				<h1>We're in MovieForm!</h1>
				<form onSubmit={this.saveMovie}>
					<input required type='text' placeholder='Title'></input>
					<input required type='text' placeholder='Poster'></input>
					<textarea
						required
						id='movieDesc'
						name='Description'
						placeholder='Movie Description'></textarea>
					<select required name='Pick Genre' placeholder='Pick Genre'>
						<option>Adventure</option>
						<option>Animated</option>
						<option>Biographical</option>
						<option>Comedy</option>
						<option>Disaster</option>
						<option>Drama</option>
						<option>Epic</option>
						<option>Fantasy</option>
						<option>Musical</option>
						<option>Romantic</option>
						<option>Science Fiction</option>
						<option>Space-Opera</option>
						<option>Superhero</option>
					</select>
					<button onClick={this.cancel}>Cancel</button>
					<button type='submit'>Save</button>
				</form>
			</div>
		);
	}
}

export default connect()(withRouter(MovieForm));
