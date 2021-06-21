const express = require('express');
const poolCategory = require('../database/db');

const routes = express.Router();

//get all categories
routes.get('/', async(req,res) => {
    try {
        const allCategory = await poolCategory.query('SELECT * FROM category');
        res.status(200).json(allCategory.rows);
        console.log('Get API all category success');
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

//get a category
routes.get('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const category = await poolCategory.query('SELECT * FROM category WHERE category_id = $1',[id]);
        if (category) {
            res.status(200).json(category.rows[0]);
            console.log('Get API category success');
        } else {
            res.status(404).send("Category ID does not exists");
        }
    } catch (err) {
        res.status(500).send(err.message);
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
        res.status(201).json(newCategory.rows[0]);
        console.log('Post API Category success');
    } catch (err) {
        res.status(500).send(err.message);
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
        if (upCategory) {
            res.status(200).json('category was update');
            console.log('Put API Category success');
        } else {
            res.status(404).send("Category ID does not exists");
        }
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

//delete a category
routes.delete('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const delCategory = await poolCategory.query('DELETE FROM category WHERE category_id = $1',[id]);
        if (delCategory) {
            res.status(204).json('category was success delete');
            console.log('Delete API Category success');
        } else {
            res.status(404).send("Category ID does not exists");
        }
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

module.exports = routes;