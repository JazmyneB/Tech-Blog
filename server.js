//const path = require('path');
const express = require('express');
const routes = require('./controllers');
//const session = require('express-session');
const exphs = require('express-handlebars');
const hbs = exphs.create({});

const app = express();
const PORT = process.env.PORT || 3002;

const sequelize = require('./config/connection');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });