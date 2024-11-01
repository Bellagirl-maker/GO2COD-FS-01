const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


// Connect to MongoDB
mongoose.connect('mongodb+srv://isabellaotoo25:DIk2SnWjQRi2wYs3@cluster0.kle1i.mongodb.net/', {
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
