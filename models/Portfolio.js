const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Coin = new Schema(
	{
		title: String,
		amount: Number,
		ppc: Number,
		gain: Number,
	},
	{
		timestamps: true,
	}
);

const Portfolio = new Schema(
	{
		owner: String,
		coins: [Coin],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Portfolio', Portfolio);
