const express = require('express');
const router = express.Router();
const userRoutes = require('./src/module/user/routes/user.route');

router.use('/user', userRoutes);


module.exports = router;
