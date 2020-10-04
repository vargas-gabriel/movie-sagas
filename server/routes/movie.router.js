const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.post("/", (req, res) => {
	console.log("this is req.body:", req.body);
	// RETURNING "id" will give us back the id of the created movie
	const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`;

	// FIRST QUERY MAKES MOVIE
	pool
		.query(insertMovieQuery, [
			req.body.title,
			req.body.poster,
			req.body.description,
		])
		.then((result) => {
			console.log("New Movie Id:", result.rows[0].id); //ID IS HERE!
			console.log(req.body.genre);
			const createdMovieId = result.rows[0].id;

			// Depending on how you make your junction table, this insert COULD change.
			const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movies_id", "genres_id")
      VALUES  ($1, $2);
      `;
			// SECOND QUERY MAKES GENRE FOR THAT NEW MOVIE
			pool
				// .query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id])
				.query(insertMovieGenreQuery, [createdMovieId, req.body.genre])

				.then((result) => {
					//Now that both are done, send back success!
					res.sendStatus(201);
					console.log("here is your success message");
				})
				.catch((err) => {
					// catch for second query
					console.log("error second query", err);
					res.sendStatus(500);
				});

			// Catch for first query
		})
		.catch((err) => {
			console.log("error first query", err);
			res.sendStatus(500);
		});
});

router.get("/", (req, res) => {
	let query = 'SELECT * FROM "movies"';
	pool
		.query(query)
		.then((result) => {
			res.send(result.rows);
		})
		.catch((err) => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.get("/:id", (req, res) => {
	console.log("in get request movie details", req.params.id);
	// let query = 'SELECT * FROM "movies" WHERE "id" = $1;';
	// pool
	let query =
		"SELECT * FROM movies JOIN movies_genres ON movies.id = movies_genres.movies_id JOIN genres ON movies_genres.genres_id = genres.id WHERE movies.id = $1;";
	pool
		.query(query, [req.params.id])
		.then((result) => {
			res.send(result.rows);
			console.log(result.rows);
		})
		.catch((err) => {
			console.log("error with details query", err);
			res.sendStatus(500);
		});
});

module.exports = router;
