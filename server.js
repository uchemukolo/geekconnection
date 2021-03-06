const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//DB config
const db = require('./config/keys').mongoURI;

// Connect to MondoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(error => console.log('error'));

app.get('/', (request, response) => response.send('Hello World'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on ${port}`));