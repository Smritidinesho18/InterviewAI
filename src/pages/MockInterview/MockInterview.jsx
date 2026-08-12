import { useState } from "react";
import "./MockInterview.css";


    const questions = {
  HR: [
    {
      question: "Tell me about yourself.",
      category: "HR"
    },
    {
      question: "What are your strengths and weaknesses?",
      category: "HR"
    },
    {
      question: "Why should we hire you?",
      category: "HR"
    },
    {
      question: "Where do you see yourself in five years?",
      category: "HR"
    },
    {
      question: "Why do you want to work for our company?",
      category: "HR"
    }
  ],

  Technical: [
    {
      question: "What is object-oriented programming?",
      category: "Technical"
    },
    {
      question: "What is the difference between an array and a linked list?",
      category: "Technical"
    },
    {
      question: "What is a database?",
      category: "Technical"
    },
    {
      question: "What is the difference between HTTP and HTTPS?",
      category: "Technical"
    },
    {
      question: "What is the time complexity of binary search?",
      category: "Technical"
    }
  ],

  Behavioral: [
    {
      question: "Tell me about a challenging situation you faced.",
      category: "Behavioral"
    },
    {
      question: "Tell me about a time you worked in a team.",
      category: "Behavioral"
    },
    {
      question: "How do you handle failure?",
      category: "Behavioral"
    },
    {
      question: "How do you handle pressure?",
      category: "Behavioral"
    },
    {
      question: "Tell me about a time you solved a difficult problem.",
      category: "Behavioral"
    }
  ]
};
function MockInterview() {
  const currentQuestions = questions[selectedType];
  const interviewTypes = [
  "HR",
  "Technical",
  "Behavioral"
];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
const [score, setScore] = useState(0);
const [selectedType, setSelectedType] = useState("HR");

  const handleStart = () => {
    setStarted(true);
  };

  const handleNext = () => {
  const updatedAnswers = [...answers];

  updatedAnswers[currentQuestion] = answer;

  setAnswers(updatedAnswers);

  if (currentQuestion < currentQuestions.length - 1) {
    const nextQuestion = currentQuestion + 1;

    setCurrentQuestion(nextQuestion);
    setAnswer(updatedAnswers[nextQuestion] || "");
  }
};

  const handlePrevious = () => {
  const updatedAnswers = [...answers];

  updatedAnswers[currentQuestion] = answer;

  setAnswers(updatedAnswers);

  if (currentQuestion > 0) {
    const previousQuestion = currentQuestion - 1;

    setCurrentQuestion(previousQuestion);
    setAnswer(updatedAnswers[previousQuestion] || "");
  }
};
const calculateScore = (answerText) => {
  if (!answerText || answerText.trim() === "") {
    return 0;
  }

  const words = answerText.trim().split(/\s+/).length;

  if (words < 10) {
    return 3;
  }

  if (words < 25) {
    return 5;
  }

  if (words < 50) {
    return 7;
  }

  return 9;
};
  const handleFinish = () => {
  const updatedAnswers = [...answers];

  updatedAnswers[currentQuestion] = answer;

  setAnswers(updatedAnswers);

  let totalScore = 0;

  updatedAnswers.forEach((item) => {
    if (item && item.trim() !== "") {
      const words = item.trim().split(/\s+/).length;

      if (words < 10) {
        totalScore += 3;
      } else if (words < 25) {
        totalScore += 5;
      } else if (words < 50) {
        totalScore += 7;
      } else {
        totalScore += 9;
      }
    }
  });

  const finalScore = Math.round(totalScore / questions[currentQuestion]);

  setScore(finalScore);
  setFinished(true);
};

  

  

  const handlePracticeAgain = () => {
  setFinished(false);
  setStarted(false);
  setCurrentQuestion(0);
  setAnswer("");
  setAnswers([]);
  setScore(0);

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
  <strong>
  {score} / 10
</strong>
</div>

            <div className="result-details">

  <div>
    <strong>{currentQuestions[currentQuestion]?.question || "N/A"}</strong>
    <span>Questions</span>
  </div>

  <div>
    <strong>
      {answers.filter(
        (item) => item && item.trim() !== ""
      ).length}
    </strong>
    <span>Answered</span>
  </div>

  <div>
    <strong>
      {questions.length -
        answers.filter(
          (item) => item && item.trim() !== ""
        ).length}
    </strong>
    <span>Skipped</span>
  </div>

</div>
            

            <h2>💪 Strengths</h2>

<ul>
  {score >= 7 ? (
    <>
      <li>Good and detailed answers</li>
      <li>Shows confidence and preparation</li>
      <li>Good understanding of interview questions</li>
    </>
  ) : score >= 4 ? (
    <>
      <li>Good attempt at answering questions</li>
      <li>Shows willingness to learn</li>
      <li>Basic understanding of interview questions</li>
    </>
  ) : (
    <>
      <li>Made an attempt to participate</li>
      <li>Started practicing interview questions</li>
      <li>Has an opportunity to improve with practice</li>
    </>
  )}
</ul>
            <h2>📈 Areas to Improve</h2>

<ul>
  {score >= 7 ? (
    <>
      <li>Add more specific examples from your experience</li>
      <li>Make your answers more concise</li>
      <li>Continue practicing to improve confidence</li>
    </>
  ) : score >= 4 ? (
    <>
      <li>Give more specific examples</li>
      <li>Make your answers clearer and more structured</li>
      <li>Explain your experience with more confidence</li>
    </>
  ) : (
    <>
      <li>Try to answer every question</li>
      <li>Give longer and more detailed answers</li>
      <li>Practice common interview questions</li>
    </>
  )}
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
            <div className="interview-type-selection">

  <h3>Choose Interview Type</h3>

  <div className="interview-type-buttons">

    {interviewTypes.map((type) => (
      <button
        key={type}
        className={
          selectedType === type
            ? "type-btn active"
            : "type-btn"
        }
        onClick={() => setSelectedType(type)}
      >
        {type} Interview
      </button>
    ))}

  </div>

</div>

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
  {questions[currentQuestion].question}
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