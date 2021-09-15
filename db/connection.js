const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('connected', function () {
	console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

module.exports = mongoose;
