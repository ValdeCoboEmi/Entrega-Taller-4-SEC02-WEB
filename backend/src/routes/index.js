const { Router } = require('express');
const healthController = require('../controllers/healthController');
const infoController = require('../controllers/infoController');

const router = Router();

router.get('/health', healthController.getHealth);
router.get('/info', infoController.getInfo);

module.exports = router;
