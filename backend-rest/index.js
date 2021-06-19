const express = require('express');
const path = require('path');
const port = process.env.PORT || '3000';

const storeRoutes = require('./routes/store');
const categoryRoutes = require('./routes/category');
const menuRoutes = require('./routes/menu');

const app = express();

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Narathip application." });
});

//routes
app.use('/stores', storeRoutes);
app.use('/categories', categoryRoutes);
app.use('/menu', menuRoutes);

app.listen(port, (err) => {
    if (err) console.error('Unable to connect the server: ', err);
    console.log(`server is listening on port ${port}`);
});

module.exports = app;