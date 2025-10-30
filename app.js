const express = require('express');
const router = express.Router();
const userRoutes = require('./src/module/user/user.route');

router.use('/user', userRoutes);


module.exports = router;
