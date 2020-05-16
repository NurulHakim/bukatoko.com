const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const catalogRoutes = require('./routes/catalogRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const User = require('./models/User');
//const privates = require('./config/privates');

// Uncomment to seed products to the database
// const seedProducts = require('./seeds/products');
// seedProducts();

const publicPath = path.join(__dirname, 'client', 'public');
const port = process.env.PORT || 5000;

const app = express();
mongoose.connect('mongodb+srv://admin:admin123@cluster0-dsgkl.gcp.mongodb.net/test?retryWrites=true&w=majority');

const seedProducts = require('./seeds/products.js');
seedProducts();

const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(express.static(publicPath));
app.use(urlencodedParser);
app.use(expressSession({
  secret: '5ebedbaa69d39413f1f78a80',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/auth', authRoutes);
app.use('/api/catalog', catalogRoutes);
app.use('/api/user', userRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => console.log('=======================================\n\n-> Iman Maliki\n-> Leo Viranda\n-> Nurul Hakim\nSERVER NOW RUNNING ON : http://localhost:5000\n\n=======================================\n'));