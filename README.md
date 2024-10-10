# CryptoApp

## Cryptocurrency Data Tracker

CryptoApp is a server-side application built with Node.js and MongoDB that tracks cryptocurrency prices, market capitalization, and 24-hour changes for Bitcoin, Matic, and Ethereum. The application fetches data from the CoinGecko API every two hours and stores it in a MongoDB database.

## Features

- **Background Job**: Automatically fetches and stores cryptocurrency data at specified intervals.
- **API Endpoints**:
  - **`/stats`**: Retrieve the latest data for a specified cryptocurrency.
  - **`/deviation`**: Calculate and return the standard deviation of the price for the last 1000 records.
- **MongoDB Integration**: Uses Mongoose to interact with a MongoDB database, providing structured data through schemas.

## Getting Started

To set up and run the application locally, follow these steps:

### 1. Clone the Repository

### 2. Run npm install (Install dependencies)

### 3. Create a .env file and add PORT, MongoDB URL, Coin Gecko api_key

### 4. Start application with npm start

### 5. Access the API endpoints at localhost://{port} (port given in env, default set to 3000)
