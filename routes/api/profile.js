const express = require('express');
const router = express.Router();

// @route Get api/profile/test
// @desc Tests profile routes
// @access Public
router.get('/test', (request, response) => response.json({ message: 'Profile works' }));

module.exports = router