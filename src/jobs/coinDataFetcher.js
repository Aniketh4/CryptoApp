const axios = require('axios');
const cron = require('node-cron');
const Crypto = require('../models/cryptoModel');

// Function to fetch crypto data using CoinGecko API
const fetchCryptoData = async () => {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cmatic-network%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true',
      {
        headers: {
          'accept': 'application/json',
          'x-cg-demo-api-key': 'CG-ZobERcSGKsRooM4rxPwLxJWo',
        },
      }
    );

    const cryptoData = response.data;

    // Mapping over the response data to save it in MongoDB
    const coins = ['bitcoin', 'matic-network', 'ethereum'];
    coins.forEach(async (coin) => {
      const crypto = new Crypto({
        coin: coin,
        price: cryptoData[coin].usd,
        marketCap: cryptoData[coin].usd_market_cap,
        '24hChange': cryptoData[coin].usd_24h_change,
      });
      await crypto.save();
    });

    console.log('Crypto data updated successfully');
  } catch (error) {
    console.error('Error fetching crypto data:', error);
  }
};

// Schedule job to run every 2 hours
cron.schedule('0 */2 * * *', fetchCryptoData);

module.exports = fetchCryptoData;
