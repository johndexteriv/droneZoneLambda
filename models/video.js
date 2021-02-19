const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var videoSchema = new Schema({
	name: String,
	description: String,
	date: String,
	region: String,
	url: String,
});

module.exports = mongoose.model("video", videoSchema);
