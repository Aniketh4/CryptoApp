const express = require('express');
const router = express.Router();
const { getCryptoStats, getCryptoDeviation } = require('../controllers/cryptoController');

// Route to get the latest crypto data
router.get('/stats', getCryptoStats);

// Route to get the standard deviation
router.get('/deviation', getCryptoDeviation);

module.exports = router;
