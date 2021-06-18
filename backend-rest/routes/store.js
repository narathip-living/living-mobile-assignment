const express = require('express');
const poolStore = require('../db');

const routes = express.Router();

//get all stores
routes.get('/', async(req,res) => {
    try {
        const allStore = await poolStore.query('SELECT * FROM store');
        res.status(200).json(allStore.rows);
        console.log('Get API all store success');
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

//get a store
routes.get('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const store = await poolStore.query('SELECT * FROM store WHERE store_id = $1',[id]);
        if (store) {
            res.status(200).json(store.rows[0]);
            console.log('Get API store success');
        } else {
            res.status(404).send("Store ID does not exists");
        }
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

//create a store
routes.post('/', async(req,res) => {
    try {
        const value = req.body;
        const newStore = await poolStore.query(
            'INSERT INTO store (name, description, rating) VALUES ($1, $2, $3) RETURNING *', 
            [value.name, value.description, value.rating]);
        res.status(201).json(newStore.rows[0]);
        console.log('Post API store success');
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

//update a store
routes.put('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const value = req.body;
        const upStore = await poolStore.query(
            'UPDATE store SET name = $1, description = $2, rating = $3 WHERE store_id = $4',
            [value.name,value.description,value.rating,id]);
        if (upStore) {
            res.status(200).json('store was update');
            console.log('Put API store success');
        } else {
            res.status(404).send("Store ID does not exists");
        }
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

//delete a store
routes.delete('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const delStore = await poolStore.query('DELETE FROM store WHERE store_id = $1',[id]);
        if (delStore) {
            res.status(204).json('store was success delete');
            console.log('Delete API store success');
        } else {
            res.status(404).send("Store ID does not exists");
        }
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

module.exports = routes;