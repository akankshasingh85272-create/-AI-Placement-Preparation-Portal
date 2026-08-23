const express = require("express");
const CodingSubmission = require("../models/CodingSubmission");

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const { userId, questionId, solution } = req.body;

    if (!userId || !questionId || !solution) {
      return res.status(400).json({
        message: "User, question and solution are required",
      });
    }

    const submission = await CodingSubmission.create({
      userId,
      questionId,
      solution,
    });

    res.status(201).json({
      message: "Solution submitted successfully",
      submission,
    });
  } catch (error) {
    console.error("Submission Error:", error);

    res.status(500).json({
      message: "Failed to submit solution",
    });
  }
  
});

module.exports = router;