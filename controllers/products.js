const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.post('/', async (req, res) => {
	try {
		console.log(req.body);
		const product = await Product.create(req.body);
		console.log(product);
		return res.json(product);
	} catch (error) {}
});

module.exports = router;
