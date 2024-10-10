# **CryptoApp**

### [Live Demo](https://crypto-app-theta-blond.vercel.app/)

## **Cryptocurrency Data Tracker**

CryptoApp is a robust server-side application designed to monitor key metrics of top cryptocurrencies—Bitcoin, Matic, and Ethereum. Built with **Node.js** and **MongoDB**, it tracks live prices, market capitalization, and 24-hour changes by leveraging the **CoinGecko API**, updating every two hours to ensure accurate and current data.

### **Key Features**

- **Automated Background Job**: Seamlessly fetches and stores cryptocurrency data at regular intervals, so you're always up to date.
  
- **API Endpoints**:
  - **`/stats`**: Provides the latest data for any specified cryptocurrency.
  - **`/deviation`**: Calculates and returns the standard deviation of the price over the last 100 records, offering insights into price volatility.
  
- **MongoDB Integration**: Uses **Mongoose** for structured interactions with MongoDB, ensuring efficient data storage and retrieval.

### **How to Get Started**

Follow these simple steps to run CryptoApp on your local machine:

1. **Clone the Repository**:  
   `git clone <your-repository-url>`

2. **Install Dependencies**:  
   Run `npm install` to install all necessary packages.

3. **Set Up Environment Variables**:  
   Create a `.env` file in the root directory with the following variables:
   - `PORT`: The port where the app will run (default: 3000).
   - `MONGO_URI`: Your MongoDB connection string.
   - `COINGECKO_API_KEY`: Your API key for CoinGecko.

4. **Start the Application**:  
   Use `npm start` to launch the app.

5. **Access the API Endpoints**:  
   Once running, you can interact with the API via `http://localhost:{PORT}/`, where `{PORT}` is the port you defined in your `.env` file.

