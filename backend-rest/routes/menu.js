const express = require('express');
const poolMenu = require('../db');

const routes = express.Router();

//get all menu
routes.get('/', async(req,res) => {
    try {
        const allMenu = await poolMenu.query('SELECT * FROM menu');
        res.json(allMenu.rows);
        console.log('Get API all menu success');
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = routes;