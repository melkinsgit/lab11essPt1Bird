// Bird.js defines a bird record in our DB

// require returns module.exports - you require a file.js

// define the data structure
// define data types
// arrays and nested objects
// objectID

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* bird watcher db - records types of birds, date spotted, some other info */

var birdSchema = new Schema ({
	name : { type: String,
		required: true,
		unique: true,
		lowercase: true},
	description : String,
	averageEggsLaid : { type: Number,  // integers and floats
		min: 1,
		max: 50},
	threatened: { type: Boolean, default: false},
	// add nest data
	datesSeen : [{type : Date, default: Date.now()}]    // just adding [] gives you an array
});

// mongoose.model turns it into a Bird object - uppercase first letter
var Bird = mongoose.model('Bird', birdSchema);

module.exports = Bird;