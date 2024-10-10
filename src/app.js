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

// Routes
app.use('/api', cryptoRoutes);

// Start the background job
cryptoJob();

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
