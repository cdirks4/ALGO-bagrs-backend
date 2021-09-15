const Porfolio = require('../controllers/portfolios');

module.exports = {
	show,
	create,
	update,
	delete: deletePortfolio,
};

async function show(req, res) {
	try {
		const portfolio = await Portfolio.findOne();
	} catch (err) {
		res.json(err);
	}
}
async function create(req, res) {}
async function update(req, res) {}
async function deleteCoin(req, res) {}
