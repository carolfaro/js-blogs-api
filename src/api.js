const express = require('express');
const cors = require('cors');

const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use(cors());

app.use(require('./router'));

app.use(errorMiddleware);

module.exports = app;
