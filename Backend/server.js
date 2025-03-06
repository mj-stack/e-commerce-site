// External Module
const express = require('express');

// Local Module
const userDetailsRouter = require('./routes/userDetailsRouter');

const app = express();

app.use(express.urlencoded());
app.use(userDetailsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is now listening at http://localhost:3000`);
})