const express = require('express');
const router = express.Router();
const Item = require('../models/Item'); // Import the Item model

// Define a route to get all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// router.get('/',(req, res)=>{
//   Item.find().then((result)=>{
//     res.status(200).json(result);
//   })
// })

// Define other routes for creating, updating, deleting items, etc.

module.exports = router;
