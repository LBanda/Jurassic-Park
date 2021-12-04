const express = require('express');

const router = express.Router();

const parqueController = require('../controllers/parque_controller');

router.get('/incidentes', parqueController.getList);
router.get('/addincidente', parqueController.getAdd);
router.post('/addincidente', parqueController.postAdd);


module.exports = router;