
const express = require('express');
const router = express.Router();
const { createUser,getUsers, loginUser ,getMe,showUser} = require('../controller/user.controller');
const { checkUserToken } = require('../../../middleware/AuthUsercheck');

router.post('/create',createUser);

router.post('/login',loginUser);

router.get('/get-users',checkUserToken, getUsers);

router.get('/me', checkUserToken, getMe);

router.get('/:id', showUser);


module.exports = router;