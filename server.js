const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const admins = require('./data/admins.json');
const foodItems = require('./data/foodItems.json');

// Admin login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const admin = admins.find(admin => admin.username === username && admin.password === password);
  if (admin) {
    res.json({ message: 'Login successful', adminId: admin.id });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Change admin password
app.post('/api/change-password', (req, res) => {
  const { id, newPassword } = req.body;
  const admin = admins.find(admin => admin.id === id);
  if (admin) {
    admin.password = newPassword;
    fs.writeFileSync('./data/admins.json', JSON.stringify(admins, null, 2));
    res.json({ message: 'Password changed successfully' });
  } else {
    res.status(404).json({ message: 'Admin not found' });
  }
});

// Get food items
app.get('/api/food-items', (req, res) => {
  res.json(foodItems);
});

// Add food item
app.post('/api/food-items', (req, res) => {
  const { name, price } = req.body;
  const newItem = { id: Date.now(), name, price };
  foodItems.push(newItem);
  fs.writeFileSync('./data/foodItems.json', JSON.stringify(foodItems, null, 2));
  res.json({ message: 'Food item added successfully' });
});

// Remove food item
app.delete('/api/food-items/:id', (req, res) => {
  const { id } = req.params;
  const index = foodItems.findIndex(item => item.id == id);
  if (index !== -1) {
    foodItems.splice(index, 1);
    fs.writeFileSync('./data/foodItems.json', JSON.stringify(foodItems, null, 2));
    res.json({ message: 'Food item removed successfully' });
  } else {
    res.status(404).json({ message: 'Food item not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
