
const express = require('express');
const router = express.Router();
const { createUser,getUsers, loginUser ,getMe,showUser, refreshTokenUser} = require('./user.controller');
const { checkUserToken, checkAdminToken } = require('../../middleware/AuthUsercheck');

router.post('/create',createUser);

router.post('/login',loginUser);

router.post('/refresh-token', refreshTokenUser);

router.get('/get-users',checkAdminToken, getUsers);

router.get('/me', checkUserToken, getMe);

router.get('/:id', showUser);


module.exports = router;