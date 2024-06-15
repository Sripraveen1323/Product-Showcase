const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;
// Replace with your MongoDB URI
const mongoURI = '127.0.0.1:27017'; 
// Connect to MongoDB
MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

   // Replace with your database name
  const db = client.db('your_database_name'); 

  // Example endpoint to retrieve data from MongoDB
  app.get('/api/products', async (req, res) => {
    try {
      const products = await db.collection('products').find().toArray();
      res.json(products);
    } catch (error) {
      console.error('Error retrieving products:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  // Additional endpoints for CRUD operations can be added here

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
