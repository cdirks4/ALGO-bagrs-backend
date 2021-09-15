Schemas = require('../models/Portfolio');
console.log(Schemas);
const express = require('express');
const router = express.Router();
// module.exports = {
// 	show,
// 	create,
// 	update,
// };
router.post('/', async (req, res, next) => {
	try {
		console.log(req.body);
		portfolio = await Schemas.port.create({ owner: req.body.owner });
		coin = await Schemas.coin.create(req.body.coin);

		portfolio.coins.push(coin);
		portfolio.save();
		res.json(portfolio);
	} catch (err) {
		console.log(err);
		res.json(err);
	}
});
async function show(req, res) {
	try {
		const portfolio = await Portfolio.find({});
		res.json(portfolio);
	} catch (err) {
		res.json(err);
	}
}
async function create(req, res) {
	try {
		console.log(req.body);
		portfolio = await Portfolio.create({ owner: 'owner' });
		console.log(portfolio);
		// coin = await Coin.create(req.body.coin);
		// console.log(coin);
		// portfolio.coins.push(coin);
		portfolio.save();
		res.json(portfolio);
	} catch (err) {
		res.json(err);
	}
}

module.exports = router;
