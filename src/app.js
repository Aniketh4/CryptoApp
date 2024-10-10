const express = require('express');
const connectDB = require('./db');
const cryptoRoutes = require('./routes/cryptoRoutes');
const cryptoJob = require('./jobs/coinDataFetcher');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Base route to return "Hello"
app.get('/', (req, res) => {
  res.send('Hello');
});

// Routes
app.use('/', cryptoRoutes);

// Start the background job
cryptoJob();

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
