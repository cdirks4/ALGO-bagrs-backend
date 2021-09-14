const productsJSON = require('./products.json');
const product = require('../models/product');

product
	.insertMany(productsJSON)
	.catch(console.error)
	.finally(() => process.exit());
