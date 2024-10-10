require('dotenv').config();  // Loads environment variables

module.exports = {
  port: process.env.PORT || 3000,  // Default to 3000 if no PORT is set
  mongoURL: process.env.MONGO_URI,
  coinGeckoApiUrl: 'https://api.coingecko.com/api/v3/simple/price',
  supportedCoins: ['bitcoin', 'matic-network', 'ethereum']
};
