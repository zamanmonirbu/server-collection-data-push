
const express = require('express');
const router = express.Router();
const { createUser,getUsers } = require('../controller/user.controller');

router.post('/create',createUser);

router.get('/get-users',getUsers);


module.exports = router;