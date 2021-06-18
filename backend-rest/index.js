const express = require('express');
const path = require('path');
const storeRoutes = require('./routes/store');

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

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});