const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoinSchema = new Schema(
	{
		title: String,
		ppc: Number,
		shares: Number,
		geckoId: String,
	},
	{
		timestamps: true,
	}
);

const PortfolioSchema = new Schema(
	{
		owner: String,
		coins: [CoinSchema],
	},
	{
		timestamps: true,
	}
);

const Portfolio = mongoose.model('Portfolio', PortfolioSchema);
// const Coin = mongoose.model('Coin', CoinSchema);
module.exports = Portfolio;
