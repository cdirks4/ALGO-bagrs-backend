const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();
const Product = require('../models/Product');

router.get('/:id', async (req, res, next) => {
	const cart = await Cart.findOne({
		owner: req.params.id,
	})
		.populate('products')
		.exec();
	res.json(cart);
});

router.post('/', async (req, res, next) => {
	try {
		const found = await Cart.findOne({ owner: req.body.owner })
			.populate('products')
			.exec();
		if (!found) {
			const newCart = await Cart.create(req.body);
			return res.json(newCart);
		} else {
			let i = 0;
			found.forEach((product) => {
				if (product === req.body.product) {
					product.quanity += 1;
					i += 1;
				}
				if (i === 0) {
					found.products.push;
				}
			});
		}
	} catch (error) {}
});
