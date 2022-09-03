const express = require('express');
const routes = require('./routes/index');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/login', routes.loginRoute);
app.use('/user', routes.usersRoute);
app.use('/categories', routes.categoriesRoute);

app.use(errorMiddleware);

module.exports = app;
