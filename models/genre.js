const moongoose = require("mongoose");

const Schema = moongoose.Schema;

const GenreSchema = new Schema({
	name: { type: String, required: true, minlength: 3, maxlength: 100 },
});
//Virtual for Genre's URL
GenreSchema.virtual("url").get(function () {
	// We don't use an arrow function as we'll need the this object
	return `/catalog/genre/${this._id}`;
});

module.exports = moongoose.model("Genre", GenreSchema);
