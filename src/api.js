const express = require('express');
// const usersRouter = require('./routers/usersRouter');
// const categoriesRouter = require('./routers/categoriesRouter');
// const blogPostsRouter = require('./routers/blogPostsRouter');
// const postsCategoriesRouter = require('./routers/postsCategoriesRouter');

// ...

const app = express();

app.use(express.json());
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
