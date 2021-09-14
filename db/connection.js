const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI =
	process.env.NODE_ENV === 'production'
		? process.env.DB_URL
		: 'mongodb://localhost/grocery-backend';

mongoose
	.connect(mongoURI, {
		useNewUrlParser: true,

		useUnifiedTopology: true,
	})
	.then((instance) =>
		console.log(`Connected to db: ${instance.connections[0].name}`)
	)
	.catch((error) => console.log('Connection failed', error));

module.exports = mongoose;
