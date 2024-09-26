const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize app
const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = "mongodb+srv://Data:1234@products.ry40d.mongodb.net/?retryWrites=true&w=majority&appName=Products"

// MongoDB connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Schema and Model
const studentSchema = new mongoose.Schema({
  name: String,
  roll: String,
  subjects: [
    { name: String, marks: Number }
  ],
  avgCGP: Number,
});

const Student = mongoose.model('Student', studentSchema);

// POST route to save form data
app.post('/api/student', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET route to retrieve all student data
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
