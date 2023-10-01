const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/items'); // Import the item routes
// ...
require('dotenv').config(); // Load environment variables
const app = express();
const port = process.env.PORT || 5000;
const Item = require('./models/Item');
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ...
// app.get('/items',(req, res)=>{
//   Item.find().then((result)=>{
//     res.status(200).json(result);
//   })
// })

// Use the item routes for the /api/items endpoint
app.use('/api/items', itemRoutes);

// ...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
