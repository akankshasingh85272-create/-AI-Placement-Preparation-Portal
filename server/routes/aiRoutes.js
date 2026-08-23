const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const router = express.Router();

const ai = new GoogleGenAI ({
    apiKey: process.env.GEMINI_API_KEY,
});

router.post("/ask", async (req, res) => {
    try {
    const { question } = req.body;

        if (!question) {
            return res.status(400).json({
                message: "Question is required",
            });
        }
const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `You are a coding placement assistant.
Answer the student's coding question clearly.
Give code examples when useful.
Explain the answer in simple language.

Student question:
${question}`,
    });

     res.json({
      answer: response.text,
      });
    } catch (error) {
        console.error("Gemini Error:", error);

        res.status(500).json({
            message: "AI request failed",
        });
    }
});

module.exports = router;