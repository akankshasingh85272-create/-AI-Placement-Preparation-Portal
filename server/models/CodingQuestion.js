const mongoose = require("mongoose");

const codingQuestionSchema = new mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
      enum: ["Arrays", "Strings", "Linked List", "Stack & Queue"],
    },

    question: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "CodingQuestion",
  codingQuestionSchema
);