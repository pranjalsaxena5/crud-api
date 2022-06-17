const express = require ('express');
const router = require('./router');
const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = 8080;

const app = express();
app.use(router);

app.listen(PORT, (req, res) => {
    console.log(`server up on port ${PORT}`);
})