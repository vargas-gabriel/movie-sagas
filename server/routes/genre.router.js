const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/", (req, res) => {
	// Add query to get all genres
	let query = 'SELECT * FROM "genres"';
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

module.exports = router;
