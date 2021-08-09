//const path = require('path');
const express = require('express');
const routes = require('./controllers');
const session = require('express-session');
const exphs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3002;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Mysecret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sess));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });