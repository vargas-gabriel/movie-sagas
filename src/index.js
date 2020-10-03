import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

function* addMovie(action) {
	try {
		let addResponse = yield axios.post("/api/movie", action.payload);
		yield put({ type: "SET_MOVIES", payload: addResponse.data });
		console.log("this is addResponse.data:", addResponse.data);
	} catch (err) {
		console.log("add movie error is:", err);
	}
}
function* fetchMovies() {
	try {
		let movieResponse = yield axios.get("/api/movie");
		yield put({ type: "SET_MOVIES", payload: movieResponse.data });
	} catch (err) {
		console.log(err);
	}
}

function* fetchGenres() {
	try {
		let genreResponse = yield axios.get("/api/genre");
		yield put({ type: "SET_GENRES", payload: genreResponse.data });
	} catch (err) {
		console.log(err);
	}
}

function* fetchIndMovie(action) {
	try {
		let indMovieResponse = yield axios.get(action.url);
		yield put({ type: "SET_IND", payload: indMovieResponse.data });
	} catch (err) {
		console.log(err);
	}
}

// Create the rootSaga generator function
function* rootSaga() {
	yield takeEvery("FETCH_MOVIES", fetchMovies);
	yield takeEvery("FETCH_GENRES", fetchGenres);
	yield takeEvery("FETCH_IND_MOVIE", fetchIndMovie);
	yield takeEvery("ADD_MOVIE", addMovie);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
	switch (action.type) {
		case "SET_MOVIES":
			return action.payload;
		default:
			return state;
	}
};

const indMov = (state = [], action) => {
	switch (action.type) {
		case "SET_IND":
			return action.payload;
		default:
			return state;
	}
};

// Used to store the movie genres
const genres = (state = [], action) => {
	switch (action.type) {
		case "SET_GENRES":
			return action.payload;
		default:
			return state;
	}
};

// Create one store that all components can use
const storeInstance = createStore(
	combineReducers({
		movies,
		genres,
		indMov,
	}),
	// Add sagaMiddleware to our store
	applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={storeInstance}>
		<App />
	</Provider>,
	document.getElementById("root")
);
registerServiceWorker();
