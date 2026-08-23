import { useEffect, useState } from "react";

function CodingPrctice() {
  const [selectedTopic, setSelectedTopic] = useState("Arrays");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [solution, setSolution] = useState("");

  const [questions, setQuestions] = useState([]);
  const [loadingQuestions, setLoadingQuestions] = useState(true);

  const [aiQuestion, setAiQuestion] = useState("");
  const [aiAnswer, setAiAnswer] = useState("");

  // Fetch questions from MongoDB
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoadingQuestions(true);

        const response = await fetch(
          `http://localhost:5000/api/coding/questions?topic=${encodeURIComponent(
            selectedTopic
          )}`
        );

        const data = await response.json();

        if (response.ok) {
          setQuestions(data);
        } else {
          console.error(data.message);
          setQuestions([]);
        }
      } catch (error) {
        console.error("Questions fetch error:", error);
        setQuestions([]);
      } finally {
        setLoadingQuestions(false);
      }
    };

    fetchQuestions();
  }, [selectedTopic]);

  // Ask AI
  const askAI = async () => {
    if (!aiQuestion.trim()) {
      alert("Please enter a question");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/ai/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: aiQuestion,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setAiAnswer(data.answer);
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("AI FETCH ERROR:", error);
      alert("Cannot connect to server");
    }
  };

  return (
    <div className="coding-container">
      <h1>Coding Practice</h1>

      {/* AI Assistant */}
      <div>
        <h2>Ask AI Coding Assistant</h2>

        <input
          type="text"
          placeholder="Ask any coding question..."
          value={aiQuestion}
          onChange={(e) => setAiQuestion(e.target.value)}
        />

        <button type="button" onClick={askAI}>
          Ask AI
        </button>

        {aiAnswer && (
          <div>
            <h3>AI Answer</h3>
            <p>{aiAnswer}</p>
          </div>
        )}
      </div>

      <p>Practice coding questions for placement preparation.</p>

      <h2>Choose a Topic</h2>

      <div className="topic-buttons">
        {["Arrays", "Strings", "Linked List", "Stack & Queue"].map(
          (topic) => (
            <button
              type="button"
              key={topic}
              onClick={() => {
                setSelectedTopic(topic);
                setSelectedQuestion(null);
                setSolution("");
              }}
            >
              {topic}
            </button>
          )
        )}
      </div>

      <h2>{selectedTopic} Questions</h2>

      <div className="questions-list">
        {/* Selected question */}
        {selectedQuestion && (
          <div className="question-solver">
            <h2>Selected Question</h2>

            <p>{selectedQuestion}</p>

            <textarea
              placeholder="Write your solution here..."
              rows="10"
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
            />

            <button
              type="button"
              onClick={() => {
                alert("Solution submitted successfully");
              }}
            >
              Submit Solution
            </button>

            <button
              type="button"
              onClick={() => {
                setSelectedQuestion(null);
                setSolution("");
              }}
            >
              Close
            </button>
          </div>
        )}

        {/* Questions from MongoDB */}
        {loadingQuestions ? (
          <p>Loading questions...</p>
        ) : questions.length === 0 ? (
          <p>No questions found for this topic.</p>
        ) : (
          questions.map((question, index) => (
            <div className="question-card" key={question._id}>
              <h3>
                {index + 1}. {question.question}
              </h3>

              <p>Difficulty: {question.difficulty}</p>

              <button
                type="button"
                onClick={() => setSelectedQuestion(question.question)}
              >
                Solve
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CodingPrctice;