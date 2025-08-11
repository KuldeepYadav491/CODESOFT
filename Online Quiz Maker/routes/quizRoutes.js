const express = require('express');
const { createQuiz, listQuizzes, getQuiz } = require('../controllers/quizController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', auth, createQuiz);
router.get('/', listQuizzes);
router.get('/:id', getQuiz);

module.exports = router;
