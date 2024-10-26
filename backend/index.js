const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

// Sample data schema and model
const DataSchema = new mongoose.Schema({
    name: String,
    value: Number,
});

const DataModel = mongoose.model('Data', DataSchema);

// Sample route to fetch all data
app.get('/api/data', async (req, res) => {
    try {
        const data = await DataModel.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
