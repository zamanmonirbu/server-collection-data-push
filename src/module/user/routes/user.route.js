
const express = require('express');
const router = express.Router();
const { createUser,getUsers, loginUser } = require('../controller/user.controller');

router.post('/create',createUser);

router.post('/login',loginUser);

router.get('/get-users',getUsers);


module.exports = router;