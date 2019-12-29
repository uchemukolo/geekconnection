const express = require('express');
const router = express.Router();

// @route Get api/users/test
// @desc Tests user routes
// @access Public
router.get('/test', (request, response) => response.json({ message: 'User works' }));

module.exports = router
