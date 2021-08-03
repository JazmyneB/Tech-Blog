//const path = require('path');
const express = require('express');
const routes = require('./controllers');
//const session = require('express-session');
//const exphs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3002;

const sequelize = require('./config/connection');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });