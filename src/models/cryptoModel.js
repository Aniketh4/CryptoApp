const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  coin: { 
    type: String, 
    enum: ['bitcoin', 'matic-network', 'ethereum'], // restrict to known coins
    required: true 
  },
  price: { type: Number, required: true },
  marketCap: { type: Number, required: true },
  '24hChange': { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Crypto', cryptoSchema);
