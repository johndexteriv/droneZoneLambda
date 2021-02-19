const mongoose = require("mongoose");
const videoSchema = require("../models/video");
const userSchema = require("../models/user");
const cors = require("cors");

module.exports = (app) => {
	mongoose.Promise = global.Promise;
	mongoose.connect(process.env.MONGOURI);

	app.get("/api/getvideos", cors(), (req, res) => {
		if (req.query.search) {
			const regex = new RegExp(escapeRegex(req.query.search), "gi");
			return videoSchema.find({ region: regex }, function (err, data) {
				if (err) throw err;
				return res.json(data);
			});
		} else {
			return videoSchema.find({}, function (err, data) {
				if (err) throw err;
				return res.json(data);
			});
		}
	});

	// app.get("/api/find", (req, res) => {

	// return videoSchema.find(
	// 	{ $text: { $name: req.body } },
	// 	function (err, data) {
	// 		if (err) {
	// 			throw err;
	// 		} else {
	// 			// console.log(data);
	// 			return res.json(data);
	// 		}
	// 	}
	// );
	// });

	app.post("/api/addvideo/", (req, res) => {
		const { name, description, date, region, url } = req.body;
		var myData = new videoSchema({ name, description, date, region, url });

		myData
			.save()
			.then((myData) => {
				res.json(`${myData} saved to database`);
			})
			.catch((err) => {
				res.status(400).send("unable to save to database");
			});
	});

	const escapeRegex = (text) => {
		return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	};

	app.get("/api/getusers", cors(), (req, res) => {
		return userSchema.find({}, (err, data) => {
			if (err) throw err;
			return res.json(data);
		});
	});

	app.post("/api/createuser", (req, res) => {
		const { firstName, lastName, username, email, password, address, city, state, country, zipcode, about } = req.body;
		var userData = new userSchema({ firstName, lastName, username, email, password, address, city, state, country, zipcode, about });

		userData
			.save()
			.then((userData) => {
				res.json(`${userData} saved to database`);
			})
			.catch((err) => {
				res.status(400).send("unable to save to database");
			});
	});
};

