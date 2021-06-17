const express = require('express');
const poolStore = require('../db');

const routes = express.Router();

//get all stores
routes.get('/', async(req,res) => {
    try {
        const allStore = await poolStore.query('SELECT * FROM store');
        res.json(allStore.rows);
        console.log('Get API all store success');
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = routes;