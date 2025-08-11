const Quiz = require('../models/Quiz');

exports.createQuiz = async (req, res) => {
  const { title, questions } = req.body;
  try {
    const quiz = await Quiz.create({ title, questions, createdBy: req.user });
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listQuizzes = async (req, res) => {
  const quizzes = await Quiz.find().select('title createdBy');
  res.json(quizzes);
};

exports.getQuiz = async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  res.json(quiz);
};
