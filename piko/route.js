const express = require('express');
const router = express.Router();
const { createAccount } = require('./components/createAccount');
const { login } = require('./components/login');
const { allUsers } = require('./components/allUsers');
// const { deleteUser } = require('./components/deleteUser');
// const { updateUser } = require('./components/updateUser');

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
        const results = await deleteUser("699da6138f367b7ec8eda405");
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting user.' });
    }
});

// router.post('/updateUser', async (req, res) => {
//     const id = req.body.id;
//     const email = req.body.email;
//     const username = req.body.username;
//     const phone = req.body.phone;
//     const name = req.body.name;
//     const surname = req.body.surname;
//     try {
//         const results = await updateUser(id, email, username, phone, name, surname);
//         res.json(results);
//     } catch (error) {
//         res.status(500).json({ error: 'An error occurred while updating user.' });
//     }
// });
module.exports = router;

