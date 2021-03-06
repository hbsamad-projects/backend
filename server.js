const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true}
);
const connection = mongoose.connection;

connection.once('open', () =>{
  console.log("MongoDb database connection established successfully");
});

const qualificationsRouter = require('./routes/qualifications');

app.use('/qualifications', qualificationsRouter);

app.get("/", (req, res) => {
  res.send("Server is running on port : " + connection);
});

app.listen(port, () => {
  console.log("Server is running on port : " + port);
});
