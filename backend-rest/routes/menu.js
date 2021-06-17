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

//get a menu
routes.get('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const menu = await poolMenu.query('SELECT * FROM menu WHERE menu_id = $1',[id]);
        res.json(menu.rows[0]);
        console.log('Get API menu success');
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = routes;