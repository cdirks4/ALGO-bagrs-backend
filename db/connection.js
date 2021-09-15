const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(
	'mongodb+srv://cdirks4:connorpass@cluster0.7ujlv.mongodb.net/algoDB?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);
const db = mongoose.connection;

db.on('connected', function () {
	console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

module.exports = mongoose;
