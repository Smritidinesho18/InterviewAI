import { useState } from "react";
import "./MockInterview.css";

const questions = [
  "Tell me about yourself.",
  "What are your strengths and weaknesses?",
  "Why should we hire you?",
  "Where do you see yourself in five years?",
  "Describe a challenging project you worked on."
];

function MockInterview() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswer("");
    }
  };

  const handleFinish = () => {
    setFinished(true);
  };

  const handlePracticeAgain = () => {
    setFinished(false);
    setStarted(false);
    setCurrentQuestion(0);
    setAnswer("");
  };

  return (
    <div className="mock-interview-page">

      <div className="mock-interview-container">

        {/* RESULT SCREEN */}
        {finished ? (
          <div className="result-card">

            <h1>🎯 Interview Completed!</h1>

            <p className="result-message">
              Great job! You have completed your mock interview.
            </p>

            <div className="result-score">
              <span>Score</span>
              <strong>8 / 10</strong>
            </div>

            <div className="result-details">

              <div>
                <strong>5</strong>
                <span>Questions</span>
              </div>

              <div>
                <strong>5</strong>
                <span>Answered</span>
              </div>

            </div>

            <h2>💪 Strengths</h2>

            <ul>
              <li>Good attempt at answering questions</li>
              <li>Shows willingness to learn</li>
              <li>Good interview practice</li>
            </ul>

            <h2>📈 Areas to Improve</h2>

            <ul>
              <li>Give more specific examples</li>
              <li>Keep answers clear and concise</li>
              <li>Explain your experience confidently</li>
            </ul>

            <button
              className="start-interview-btn"
              onClick={handlePracticeAgain}
            >
              Practice Again
            </button>

          </div>

        ) : !started ? (

          /* START SCREEN */

          <div className="interview-start-card">

            <h1>🎤 Mock Interview</h1>

            <p>
              Practice common interview questions and improve your confidence.
            </p>

            <div className="interview-info">

              <div>
                <strong>5</strong>
                <span>Questions</span>
              </div>

              <div>
                <strong>HR</strong>
                <span>Interview Type</span>
              </div>

              <div>
                <strong>Easy</strong>
                <span>Difficulty</span>
              </div>

            </div>

            <button
              className="start-interview-btn"
              onClick={handleStart}
            >
              Start Interview
            </button>

          </div>

        ) : (

          /* INTERVIEW SCREEN */

          <div className="interview-card">

            <div className="interview-header">

              <h1>🎤 Mock Interview</h1>

              <span>
                Question {currentQuestion + 1} / {questions.length}
              </span>

            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`
                }}
              ></div>

            </div>

            <div className="question-section">

              <p className="question-number">
                Question {currentQuestion + 1}
              </p>

              <h2>
                {questions[currentQuestion]}
              </h2>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Type your answer here..."
              />

            </div>

            <div className="interview-actions">

              <button
                className="previous-btn"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>

              {currentQuestion === questions.length - 1 ? (

                <button
                  className="finish-btn"
                  onClick={handleFinish}
                >
                  Finish Interview
                </button>

              ) : (

                <button
                  className="next-btn"
                  onClick={handleNext}
                >
                  Next Question
                </button>

              )}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default MockInterview;