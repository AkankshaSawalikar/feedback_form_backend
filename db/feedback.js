const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  //name: String,
  userID: String,
  feedback: {
    question1: {
      question: String,
      rating: Number,
    },
    question2: {
      question: String,
      rating: Number,
    },
    // Add more questions as needed
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
