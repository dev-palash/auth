const mongoose = require('mongoose');

// Define the Item schema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  // You can add more fields as needed for your items
},
{
  collection: 'Item'
}
);

// Create the Item model based on the schema
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
