const express = require('express');
const dotenv = require('dotenv');
const appRoutes = require('./app');
const connectDB = require('./src/config/connection');

dotenv.config();
const app = express();

app.use(express.json());
connectDB();

app.use('/api', appRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
