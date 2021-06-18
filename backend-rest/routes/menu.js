const express = require('express');
const poolMenu = require('../db');

const routes = express.Router();

//get all menu
routes.get('/', async(req,res) => {
    try {
        const allMenu = await poolMenu.query('SELECT * FROM menu');
        res.status(200).json(allMenu.rows);
        console.log('Get API all menu success');
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

//get a menu
routes.get('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const menu = await poolMenu.query('SELECT * FROM menu WHERE menu_id = $1',[id]);
        if (menu) {
            res.status(200).json(menu.rows[0]);
            console.log('Get API menu success');
        } else {
            res.status(404).send("Menu ID does not exists");
        }
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

//create a menu
routes.post('/', async(req,res) => {
    try {
        const value = req.body;
        const newMenu = await poolMenu.query(
            'INSERT INTO menu (category_id, name, price) VALUES ($1, $2, $3) RETURNING *', 
            [value.category_id, value.name, value.price]);
        res.status(201).json(newMenu.rows[0]);
        console.log('Post API menu success');
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

//update a menu
routes.put('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const value = req.body;
        const upMenu = await poolMenu.query(
            'UPDATE menu SET category_id = $1, name = $2, price = $3 WHERE menu_id = $4',
            [value.category_id, value.name, value.price, id]);
        if (upMenu) {
            res.status(200).json('menu was update');
            console.log('Put API menu success');
        } else {
            res.status(404).send("Menu ID does not exists");
        }
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

//delete a menu
routes.delete('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const delMenu = await poolMenu.query('DELETE FROM menu WHERE menu_id = $1',[id]);
        if (delMenu) {
            res.status(204).json('menu was success delete');
        console.log('Delete API menu success');
        } else {
            res.status(404).send("Menu ID does not exists");
        }
    } catch (err) {
        res.status(500).send(err.message);
        console.error(err.message);
    }
})

module.exports = routes;