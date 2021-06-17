const express = require('express');
const poolCategory = require('../db');

const routes = express.Router();

//get all categories
routes.get('/', async(req,res) => {
    try {
        const allCategory = await poolCategory.query('SELECT * FROM category');
        res.json(allCategory.rows);
        console.log('Get API all category success');
    } catch (err) {
        console.error(err.message);
    }
})

//get a category
routes.get('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const category = await poolCategory.query('SELECT * FROM category WHERE category_id = $1',[id]);
        res.json(category.rows[0]);
        console.log('Get API category success');
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = routes;