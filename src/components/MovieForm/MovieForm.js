import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
class MovieForm extends Component {
	state = {
		title: "",
		poster: "",
		description: "",
		genre: 0,
	};
	//setState functions
	handleDescriptionChange = (event) => {
		console.log(event.target.value);
		this.setState({
			description: event.target.value,
		});
	};
	handleTitleChange = (event) => {
		console.log(event.target.value);
		this.setState({
			title: event.target.value,
		});
	};
	handlePosterChange = (event) => {
		console.log(event.target.value);
		this.setState({
			poster: event.target.value,
		});
	};
	handleGenreChange = (event) => {
		console.log(event.target.value);
		this.setState({
			genre: event.target.value,
		});
	};
	//brings user back to homepage
	cancel = () => {
		console.log("canceled, going back home");
		this.props.history.push("/");
	};
	//saves user input-sends to db, then sends user back to homepage
	saveMovie = () => {
		console.log("saving movie", this.state);
		// this.props.history.push("/");
		this.props.dispatch({ type: "ADD_MOVIE", payload: this.state });
		console.log(this.state);
		this.backHome();
	};
	backHome = () => {
		this.props.history.push("/");
	};
	render() {
		return (
			<div>
				<h1>Add a Movie to Your List</h1>
				<form onSubmit={this.saveMovie}>
					<TextField
						required
						type='text'
						placeholder='Title'
						variant='outlined'
						onChange={this.handleTitleChange}></TextField>
					<TextField
						required
						type='text'
						placeholder='Poster'
						variant='outlined'
						onChange={this.handlePosterChange}></TextField>
					<TextField
						required
						id='movieDesc'
						label='Movie Description'
						variant='outlined'
						onChange={this.handleDescriptionChange}
					/>
					<Select
						value={this.state.genre}
						required
						name='Pick Genre'
						placeholder='Pick Genre'
						onChange={this.handleGenreChange}>
						<option disabled value='0'>
							Pick Genre
						</option>
						<option value={1}>Adventure</option>
						<option value={2}>Animated</option>
						<option value={3}>Biographical</option>
						<option value={4}>Comedy</option>
						<option value={5}>Disaster</option>
						<option value={6}>Drama</option>
						<option value={7}>Epic</option>
						<option value={8}>Fantasy</option>
						<option value={9}>Musical</option>
						<option value={10}>Romantic</option>
						<option value={11}>Science Fiction</option>
						<option value={12}>Space-Opera</option>
						<option value={13}>Superhero</option>
					</Select>
					<Button variant='contained' color='secondary' onClick={this.cancel}>
						Cancel
					</Button>
					<Button variant='contained' color='primary' type='submit'>
						Save
					</Button>
				</form>
			</div>
		);
	}
}

export default connect()(withRouter(MovieForm));
