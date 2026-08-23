import { useState } from "react";

function AptitudeQuiz() {
const [selectedAnswer, setSelectedAnswer] = useState("");

    const question = "What is 20% of 150?";

    const options = ["20", "30", "40", "50"];


  return (
    <div
      style={{
        padding: "50px",
        textAlign: "center",
      }}
    >
      <h1>Aptitude Quiz</h1>

      <h2>What is 20% of 150?</h2>

      <div>
        <button
          type="button"
          style={{
            margin: "10px",
            padding: "15px 30px",
            cursor: "pointer",
          }}
          onClick={() => setSelectedAnswer("20")}
        >
          20
        </button>

        <button
          type="button"
          style={{
            margin: "10px",
            padding: "15px 30px",
            cursor: "pointer",
          }}
          onClick={() => setSelectedAnswer("30")}
        >
          30
        </button>

        <button
          type="button"
          style={{
            margin: "10px",
            padding: "15px 30px",
            cursor: "pointer",
          }}
          onClick={() => setSelectedAnswer("40")}
        >
          40
        </button>

        <button
          type="button"
          style={{
            margin: "10px",
            padding: "15px 30px",
            cursor: "pointer",
          }}
          onClick={() => setSelectedAnswer("50")}
        >
          50
        </button>
      </div>

      {selectedAnswer && (
        <h3>Your answer: {selectedAnswer}</h3>
      )}
    </div>
  );

}

export default AptitudeQuiz;