const mongoose = require('../db/connection');

const ProductSchema = new mongoose.Schema({
	title: String,
	image: String,
	price: String,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
