const express = require('express');
const router = express.Router();
const portfolioCtrl = require('../controllers/portfolios');
router.post('/', portfolioCtrl.create);
router.get('/', portfolioCtrl.show);
router.patch('/', portfolioCtrl.update);
module.exports = router;
