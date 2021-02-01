// /index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// IMPORT MODELS
require('./models/Product');
require('./models/Profile');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://mitchberger106:os_user_1@cluster0.p1rwm.mongodb.net/opensponsorship?retryWrites=true&w=majority
`);

app.use(bodyParser.json());

//IMPORT ROUTES
require('./routes/productRoutes')(app);
require('./routes/profileRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/opensponsorship/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, '/opensponsorship', 'build', 'index.html'))
  })

}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});