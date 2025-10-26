const express = require('express');
const dotenv = require('dotenv');
const appRoutes = require('./app');
const connectDB = require('./src/config/connection');
const { PORT } = require('./src/config/envConfig');


dotenv.config();
const app = express();

app.use(express.json());
connectDB();

app.use('/api', appRoutes); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
