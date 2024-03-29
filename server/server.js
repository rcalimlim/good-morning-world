require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./database/database');
const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).send('Get request successful!');
});

app.listen(port, () => console.log(`Server is running on ${port}`));