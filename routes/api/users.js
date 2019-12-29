const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

//Load user model
const User = require('../../models/User');

// @route Get api/users/test
// @desc Tests user routes
// @access Public
router.get('/test', (request, response) => response.json({ message: 'User works' }));

// @route Post api/users/register
// @desc Register new user
// @access Public
router.post('/register', (request, response) => {
  User.findOne({ email: request.body.email })
    .then(user => {
      if (user) {
        return response.status(400).json({ email: 'email qlready exists' });
      } else {
        const avatar = gravatar.url(request.body.email, {
          s: 200, // Size
          r: 'pg', // Rating
          d: 'mm' // Default
        })
        const newUser = new User({
          name: request.body.name,
          email: request.body.email,
          password: request.body.password,
          avatar
        })
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) throw error;
            newUser.password = hash;
            newUser.save()
              .then(user => response.json(user))
              .catch(error => console.log(error))
          })
        })
      }
    })
});
module.exports = router
