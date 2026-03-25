const express = require('express');
const router = express.Router();
const { createAccount } = require('./components/createAccount');
const { login } = require('./components/login');
const { allUsers } = require('./components/allUsers');
const { deleteUser } = require('./components/deleteUser');
const { updateScore } = require('./components/updateScore');
const { updateDiamond } = require('./components/updateDiamond');
const { shoppingList } = require('./components/shoppingList');
const { addInventoryItem } = require('./components/addInventoryItem');

router.post('/createAccount', async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    try {
        const results = await createAccount(email, username, password);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }   
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const results = await login(username, password);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/allUsers', async (req, res) => {
    try {
        const results = await allUsers();
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/deleteUser', async (req, res) => {
    //const id = req.body.id;
    try {
        const results = await deleteUser("69c28a5722cf35590a8ccc64");
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting user.' });
    }
});

router.post('/updateScore', async (req, res) => {
    const { userId, score } = req.body;
    try {
        const results = await updateScore(userId, score);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/updateDiamond', async (req, res) => {
    const { userId, diamond } = req.body;
    try {
        const results = await updateDiamond(userId, diamond);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/addInventoryItem', async (req, res) => {
    const { userId, category, itemId } = req.body;
    try {
        const results = await addInventoryItem(userId, category, itemId);
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/shoppingList', async (req, res) => {
    try {
        const results = await shoppingList();
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

