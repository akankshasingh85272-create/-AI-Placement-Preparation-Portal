const express = require("express");
const CodingQuestion = require("../models/CodingQuestion");

const router = express.Router();

// Get coding questions
router.get("/questions", async (req, res) => {
  try {
    const { topic } = req.query;

    const filter = topic ? { topic } : {};

    const questions = await CodingQuestion.find(filter);

    res.json(questions);
  } catch (error) {
    console.error("Coding Questions Error:", error);

    res.status(500).json({
      message: "Failed to fetch coding questions",
    });
  }
});

module.exports = router;