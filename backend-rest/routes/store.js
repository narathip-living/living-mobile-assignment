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

//get a store
routes.get('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const store = await poolStore.query('SELECT * FROM store WHERE store_id = $1',[id]);
        res.json(store.rows[0]);
        console.log('Get API store success');
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = routes;