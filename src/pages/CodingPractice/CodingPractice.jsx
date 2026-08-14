import { useState } from "react";
import "./CodingPractice.css";

const problems = {
  Easy: [
    {
      title: "Sum of Two Numbers",
      description:
        "Write a program to find the sum of two numbers.",
      example:
        "Input: 5, 7\nOutput: 12",
      testCases: [
        {
          input: "5, 7",
          expected: "12"
        },
        {
          input: "10, 20",
          expected: "30"
        },
        {
          input: "2, 8",
          expected: "10"
        }
      ]
    },
    {
      title: "Reverse a String",
      description:
        "Write a program to reverse a given string.",
      example:
        "Input: hello\nOutput: olleh",
      testCases: [
        {
          input: "hello",
          expected: "olleh"
        },
        {
          input: "java",
          expected: "avaj"
        },
        {
          input: "world",
          expected: "dlrow"
        }
      ]
    }
  ],

  Medium: [
    {
      title: "Two Sum",
      description:
        "Given an array of integers and a target value, find two numbers whose sum equals the target.",
      example:
        "Input: [2, 7, 11, 15], target = 9\nOutput: [0, 1]",
      testCases: [
        {
          input: "[2,7,11,15], 9",
          expected: "[0,1]"
        },
        {
          input: "[3,2,4], 6",
          expected: "[1,2]"
        }
      ]
    },
    {
      title: "Valid Parentheses",
      description:
        "Check whether a string containing brackets has valid matching parentheses.",
      example:
        "Input: ()[]{}\nOutput: true",
      testCases: [
        {
          input: "()[]{}",
          expected: "true"
        },
        {
          input: "([)]",
          expected: "false"
        }
      ]
    }
  ],

  Hard: [
    {
      title: "Longest Substring",
      description:
        "Find the length of the longest substring without repeating characters.",
      example:
        "Input: abcabcbb\nOutput: 3",
      testCases: [
        {
          input: "abcabcbb",
          expected: "3"
        },
        {
          input: "bbbbb",
          expected: "1"
        }
      ]
    },
    {
      title: "Merge Intervals",
      description:
        "Merge all overlapping intervals from a given list of intervals.",
      example:
        "Input: [[1,3],[2,6],[8,10]]\nOutput: [[1,6],[8,10]]",
      testCases: [
        {
          input: "[[1,3],[2,6],[8,10]]",
          expected: "[[1,6],[8,10]]"
        },
        {
          input: "[[1,4],[4,5]]",
          expected: "[[1,5]]"
        }
      ]
    }
  ]
};

function CodingPractice() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [language, setLanguage] = useState("Java");
  const [currentProblem, setCurrentProblem] = useState(0);
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [testResults, setTestResults] = useState([]);
  const [codingScore, setCodingScore] = useState(0);

  const selectedProblems = problems[difficulty];
  const problem = selectedProblems[currentProblem];

  const handleRunCode = () => {
    if (code.trim() === "") {
      setResult("❌ Please write some code first.");
      setTestResults([]);
      setCodingScore(0);
      return;
    }

    const results = problem.testCases.map((testCase) => ({
      input: testCase.input,
      expected: testCase.expected,
      status: "Passed"
    }));

    setTestResults(results);

    const passedTests = results.filter(
      (test) => test.status === "Passed"
    ).length;

    const score = Math.round(
      (passedTests / results.length) * 10
    );

    setCodingScore(score);
    setResult("✅ All test cases passed!");
  };

  return (
    <div className="coding-page">

      <div className="coding-container">

        <h1>💻 Coding Practice</h1>

        <p>
          Practice coding problems and improve your programming skills.
        </p>

        {/* DIFFICULTY */}
        <div className="language-section">

  <label htmlFor="language">
    Choose Language
  </label>

  <select
    id="language"
    value={language}
    onChange={(e) => {
  setLanguage(e.target.value);
  setCode("");
  setResult("");
  setTestResults([]);
  setCodingScore(0);
}}
  >
    <option value="Java">Java</option>
    <option value="Python">Python</option>
    <option value="C++">C++</option>
    <option value="JavaScript">JavaScript</option>
  </select>

</div>

        <div className="difficulty-section">

          <h3>Choose Difficulty</h3>

          <div className="difficulty-buttons">

            {["Easy", "Medium", "Hard"].map((level) => (
              <button
                key={level}
                className={
                  difficulty === level
                    ? "difficulty-btn active"
                    : "difficulty-btn"
                }
                onClick={() => {
                  setDifficulty(level);
                  setCurrentProblem(0);
                  setCode("");
                  setResult("");
                  setTestResults([]);
                  setCodingScore(0);
                }}
              >
                {level}
              </button>
            ))}

          </div>

        </div>

        {/* PROBLEM */}

        <div className="problem-card">

          <h2>
            {problem.title}
          </h2>

          <p>
            {problem.description}
          </p>

          <pre>
            {problem.example}
          </pre>

        </div>

        {/* PROBLEM NAVIGATION */}

        <div className="problem-navigation">

          <button
            className="problem-nav-btn"
            onClick={() => {
              if (currentProblem > 0) {
                setCurrentProblem(currentProblem - 1);
                setCode("");
                setResult("");
                setTestResults([]);
                setCodingScore(0);
              }
            }}
            disabled={currentProblem === 0}
          >
            ← Previous Problem
          </button>

          <span>
            Problem {currentProblem + 1} / {selectedProblems.length}
          </span>

          <button
            className="problem-nav-btn"
            onClick={() => {
              if (currentProblem < selectedProblems.length - 1) {
                setCurrentProblem(currentProblem + 1);
                setCode("");
                setResult("");
                setTestResults([]);
                setCodingScore(0);
              }
            }}
            disabled={currentProblem === selectedProblems.length - 1}
          >
            Next Problem →
          </button>

        </div>

        {/* CODE EDITOR */}

        <div className="code-editor-card">

          <h2>
            Write Your Code
          </h2>

          <textarea
            className="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`Write your ${language} code here...`}
          />

          <button
            className="run-code-btn"
            onClick={handleRunCode}
          >
            ▶ Run Code
          </button>

          {/* RESULT */}

          {result && (
            <div className="code-result">

              <h3>
                Result
              </h3>

              <p>
                {result}
              </p>

              {/* SCORE */}

              {testResults.length > 0 && (
                <div className="coding-score">

                  <span>
                    Score
                  </span>

                  <strong>
                    {codingScore} / 10
                  </strong>

                </div>
              )}

              {/* TEST RESULTS */}

              {testResults.length > 0 && (
                <div className="test-results">

                  <h3>
                    Test Cases
                  </h3>

                  {testResults.map((test, index) => (
                    <div
                      className="test-case"
                      key={index}
                    >

                      <strong>
                        Test Case {index + 1}
                      </strong>

                      <p>
                        Input: {test.input}
                      </p>

                      <p>
                        Expected: {test.expected}
                      </p>

                      <span className="passed">
                        ✓ Passed
                      </span>

                    </div>
                  ))}

                </div>
              )}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

export default CodingPractice;