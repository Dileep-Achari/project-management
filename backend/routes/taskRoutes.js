// routes/taskRoutes.js
const express = require('express');
const { createTask, getTasks } = require('../controllers/taskController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, createTask);
router.get('/:projectId', auth, getTasks);

module.exports = router;
