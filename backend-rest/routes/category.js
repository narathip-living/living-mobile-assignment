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

//create a category
routes.post('/', async(req,res) => {
    try {
        const value = req.body;
        const newCategory = await poolCategory.query(
            'INSERT INTO category (name, store_id) VALUES ($1, $2) RETURNING *', 
            [value.name, value.store_id]);
        res.json(newCategory.rows[0]);
        console.log('Post API Category success');
    } catch (err) {
        console.error(err.message);
    }
})

//update a category
routes.put('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const value = req.body;
        const upCategory = await poolCategory.query(
            'UPDATE category SET name = $1, store_id = $2 WHERE category_id = $3',
            [value.name,value.store_id,id]);
        res.json('category was update');
        console.log('Put API Category success');
    } catch (err) {
        console.error(err.message);
    }
})

//delete a category
routes.delete('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const delCategory = await poolCategory.query('DELETE FROM category WHERE category_id = $1',[id]);
        res.json('category was success delete');
        console.log('Delete API Category success');
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = routes;