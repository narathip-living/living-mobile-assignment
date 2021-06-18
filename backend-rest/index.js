const express = require('express');
const path = require('path');
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

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});