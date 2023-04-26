const express = require('express');
const router = express.Router();

const Controller = require('./controllers/Controller');

router.get('/score', Controller.buscarScore);

router.post('/score/add', Controller.inserirScore);


module.exports = router;