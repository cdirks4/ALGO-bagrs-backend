const express = require('express');
const Portfolio = require('../models/Portfolio');
const router = express.Router();
router.post('/', create);
router.put('/', update);
router.get('/:id', show);
router.patch('/:id', updateSell);
const findPricePerCoin = (ppcOne, ppcTwo, sharesOne, sharesTwo) => {
	let totalOne = ppcOne * sharesOne;
	let totalTwo = ppcTwo * sharesTwo;
	let total = totalOne + totalTwo;
	let shares = sharesOne + sharesTwo;
	return total / shares;
};

async function create(req, res, next) {
	try {
		let portfolio = await Portfolio.findOne({ owner: req.body.owner });
		if (portfolio) {
			update(req, res);
		} else {
			let portfolio = await Portfolio.create({ owner: req.body.owner });

			portfolio.coins.push({
				title: req.body.title,
				ppc: req.body.ppc,
				shares: req.body.shares,
				geckoId: req.body.geckoId,
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
		if (portfolio[0]) {
			portfolio[0].coins.forEach((coin) => {
				if (coin.title === req.body.title) {
					let ppc = findPricePerCoin(
						parseInt(req.body.ppc),
						parseInt(coin.ppc),
						parseInt(req.body.shares),
						parseInt(coin.shares)
					);
					coin.shares += req.body.shares;
					coin.ppc = ppc;
				}
			});
		} else {
			portfolio = await Portfolio.find({
				owner: req.body.owner,
			});
			portfolio[0].coins.push({
				title: req.body.title,
				ppc: req.body.ppc,
				shares: req.body.shares,
				geckoId: req.body.geckoId,
			});
		}
		portfolio[0].save();
		res.json(portfolio);
	} catch (err) {
		res.json(err);
	}
}

async function show(req, res, next) {
	try {
		let portfolio = await Portfolio.findOne({ owner: req.params.id });

		res.json(portfolio);
	} catch (err) {
		res.json(err);
	}
}

async function updateSell(req, res, next) {
	try {
		let portfolio = await Portfolio.findOne({ owner: req.params.id });
		let coin = portfolio.coins.id(req.body.coin_id);
		console.log(coin);
		coin.shares -= req.body.shares;
		portfolio.save();
	} catch (err) {
		res.json(err);
	}
}

module.exports = router;
