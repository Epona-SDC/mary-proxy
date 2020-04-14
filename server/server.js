const nr = require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(cors());
// app.use(express.json());
app.use(express.static(__dirname + '/../public'));

app.listen(port, () => console.log(`Mary's porxy listening on port ${port}`));
