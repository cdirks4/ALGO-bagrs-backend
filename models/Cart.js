const mongoose = require('../db/connection');

const CartSchema = new mongoose.Schema({
	owner: String,
	products: {
		product: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Product',
		},
		quanity: Number,
	},
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
