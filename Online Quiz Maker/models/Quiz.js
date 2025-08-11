const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  questions: [
    {
      question: String,
      options: [String],
      correctAnswer: Number // index of correct option
    }
  ]
});

module.exports = mongoose.model('Quiz', quizSchema);
