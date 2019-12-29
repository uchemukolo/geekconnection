const express = require('express');
const router = express.Router();

// @route Get api/posts/test
// @desc Tests posts routes
// @access Public
router.get('/test', (request, response) => response.json({ message: 'Posts works' }));

module.exports = router