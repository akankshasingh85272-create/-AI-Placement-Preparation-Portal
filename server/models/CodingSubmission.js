const mongoose = require("mongoose");

const codingSubmissionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CodingQuestion",
      required: true,
    },

    solution: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["submitted", "completed"],
      default: "submitted",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "CodingSubmission",
  codingSubmissionSchema
);