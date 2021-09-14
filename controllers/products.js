const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		product = await Product.find();
		res.json(prod);
	} catch (error) {
		res.json(error);
	}
});

router.get('/:category', (req, res, next) => {
	Product.find({ category: req.params.category }).then((prod) =>
		res.json(prod)
	);
});

module.exports = router;
