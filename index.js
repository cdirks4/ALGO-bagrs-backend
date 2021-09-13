const express = require('express');
const app = express();
const cors = require('cors');

//Setting the port to run on
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const requestLogger = require('./middleware/request_logger');
app.use(requestLogger);

app.listen(app.get('port'), () => {
	console.log(`✅ Listening on port ${app.get('port')}`);
});

module.exports = app;
