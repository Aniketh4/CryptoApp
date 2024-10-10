const calculateStandardDeviation = (prices) => {
    const mean = prices.reduce((acc, price) => acc + price, 0) / prices.length;
    const variance = prices.reduce((acc, price) => acc + Math.pow(price - mean, 2), 0) / prices.length;
    return Math.sqrt(variance).toFixed(2);
  };
  
  module.exports = { calculateStandardDeviation };
  