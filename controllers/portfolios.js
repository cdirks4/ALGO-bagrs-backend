const express = require('express');
const Portfolio = require('../models/Portfolio');
const router = express.Router();
router.post('/', create);
router.patch('/', update);
router.get('/:id', show);
async function create(req, res, next) {
	try {
		portfolio = await Portfolio.findOne({ owner: req.body.owner });
		if (portfolio) {
			update(req, res);
		} else {
			portfolio = await Portfolio.create({ owner: req.body.owner });

			portfolio.coins.push({
				title: req.body.title,
				amount: req.body.amount,
				shares: req.body.shares,
			});
			portfolio.save();
			res.json(portfolio);
		}
	} catch (err) {
		console.log(err);
		res.json(err);
	}
}
async function update(req, res, next) {
	try {
		let portfolio = await Portfolio.find({
			owner: req.body.owner,
			'coins.title': req.body.title,
		});
		console.log(portfolio[0]);
		if (portfolio[0]) {
			portfolio[0].coins.forEach((coin) => {
				if (coin.title === req.body.title) {
					coin.amount = parseInt(coin.amount);
					coin.shares = parseInt(coin.shares);
					coin.amount += parseInt(req.body.amount);
					coin.shares += parseInt(req.body.shares);
				}
			});
		} else {
			portfolio = await Portfolio.find({
				owner: req.body.owner,
			});
			portfolio[0].coins.push({
				title: req.body.title,
				amount: req.body.amount,
				shares: req.body.shares,
			});
		}
		portfolio[0].save();
		res.json(portfolio);
	} catch (err) {
		console.log(err);
		res.json(err);
	}
}

async function show(req, res, next) {
	try {
		let portfolio = await Portfolio.findOne({ owner: req.params.id });
		console.log('hi');
		console.log(portfolio);
		res.json(portfolio);
	} catch (err) {
		res.json(err);
	}
}

module.exports = router;
