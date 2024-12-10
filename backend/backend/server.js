const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Registration API
app.post('/api/register', (req, res) => {
  const { name, email, password, course } = req.body;
  if (!name || !email || !password || !course) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Simulate saving data to a database or local storage
  console.log("Registration Data:", { name, email, password, course });

  // Respond back with a success message
  res.status(200).json({ message: 'Registration successful!' });
});

// Contact Form API
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // Simulate saving data to a database or local storage
  console.log("Contact Form Data:", { firstName, lastName, email, phone, message });

  // Respond back with a success message
  res.status(200).json({ message: 'Message sent successfully!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
