const Crypto = require('../models/cryptoModel');
const { calculateStandardDeviation } = require('../utils/calcUtils');

// API to get the latest cryptocurrency data
const getCryptoStats = async (req, res) => {
  const { coin } = req.query;

  try {
    const crypto = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
    if (!crypto) return res.status(404).json({ msg: 'No data found' });

    res.json({
      price: crypto.price,
      marketCap: crypto.marketCap,
      '24hChange': crypto['24hChange'],
    });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// API to calculate standard deviation
const getCryptoDeviation = async (req, res) => {
  const { coin } = req.query;

  try {
    const records = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(1000);

    // Check if there are enough records
    if (records.length < 1) {
      return res.status(404).json({ msg: 'No records found for the specified coin' });
    }

    const prices = records.map(r => r.price);

    // Calculate standard deviation
    const deviation = calculateStandardDeviation(prices);

    // Check if less than 1000 records were used
    if (records.length < 100) {
      return res.status(400).json({ 
        msg: 'Not enough data, so giving for lesser than 100 records',
        deviation 
      });
    }

    // Return the standard deviation
    return res.json({ deviation });
    
  } catch (error) {
    console.error(error); // Log the error for debugging
    return res.status(500).json({ msg: 'Server error' });
  }
};


module.exports = {
  getCryptoStats,
  getCryptoDeviation,
};
