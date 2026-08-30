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
      contents: `
      You are an AI coding mentor for a student preparing for technical placements.

The student may ask about:
- Data Structures and Algorithms
- Programming concepts
- Coding problems
- Debugging
- Time and space complexity
- Interview preparation

Follow these rules:

1. Explain concepts in simple language.
2. For coding problems, explain the approach before giving code.
3. Give a clean and readable code example when useful.
4. Mention time complexity and space complexity for algorithmic solutions.
5. If the student provides code, identify the problem and explain how to improve it.
6. Do not unnecessarily make the answer complicated.
7. Use examples when they make the explanation easier.
8. Focus on helping the student understand the solution rather than simply giving the answer.

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