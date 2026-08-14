import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import mammoth from "mammoth";
import "./ResumeAnalyzer.css";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

function ResumeAnalyzer() {
  const [resume, setResume] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);

  // -------------------------------
  // UPLOAD AND READ RESUME
  // -------------------------------

  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    setResume(file);
    setAnalysis(null);
    setResumeText("");

    try {
      // PDF
      if (file.type === "application/pdf") {
        const arrayBuffer = await file.arrayBuffer();

        const pdf = await pdfjsLib.getDocument({
          data: arrayBuffer
        }).promise;

        let text = "";

        for (
          let pageNumber = 1;
          pageNumber <= pdf.numPages;
          pageNumber++
        ) {
          const page = await pdf.getPage(pageNumber);

          const content = await page.getTextContent();

          const pageText = content.items
            .map((item) => item.str)
            .join(" ");

          text += pageText + "\n";
        }

        setResumeText(text);

        console.log("Resume text extracted:", text);
      }

      // DOCX
      else if (
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
        file.name.toLowerCase().endsWith(".docx")
      ) {
        const arrayBuffer = await file.arrayBuffer();

        const result = await mammoth.extractRawText({
          arrayBuffer
        });

        setResumeText(result.value);

        console.log(
          "Resume text extracted:",
          result.value
        );
      }

      // Unsupported file
      else {
        setResumeText(
          "This file type is not supported. Please upload a PDF or DOCX file."
        );
      }

    } catch (error) {
      console.error(
        "Error reading resume:",
        error
      );

      setResumeText(
        "Unable to read this resume."
      );
    }
  };

  // -------------------------------
  // ANALYZE RESUME
  // -------------------------------

  const handleAnalyze = () => {
    if (!resumeText.trim()) {
      return;
    }

    setAnalyzing(true);

    setTimeout(() => {
      const text = resumeText.toLowerCase();

      let score = 0;

      const strengths = [];
      const improvements = [];

      // TECHNICAL SKILLS
      if (
        text.includes("java") ||
        text.includes("python") ||
        text.includes("javascript") ||
        text.includes("react") ||
        text.includes("html") ||
        text.includes("css")
      ) {
        score += 20;

        strengths.push(
          "Good technical skills"
        );
      } else {
        improvements.push(
          "Add more technical skills"
        );
      }

      // PROJECTS
      if (
        text.includes("project") ||
        text.includes("projects")
      ) {
        score += 20;

        strengths.push(
          "Projects are included"
        );
      } else {
        improvements.push(
          "Add relevant projects"
        );
      }

      // EDUCATION
      if (
        text.includes("education") ||
        text.includes("b.tech") ||
        text.includes("btech") ||
        text.includes("degree") ||
        text.includes("computer science")
      ) {
        score += 15;

        strengths.push(
          "Education details are included"
        );
      } else {
        improvements.push(
          "Add education details"
        );
      }

      // EXPERIENCE
      if (
        text.includes("experience") ||
        text.includes("internship") ||
        text.includes("intern") ||
        text.includes("work experience")
      ) {
        score += 15;

        strengths.push(
          "Experience or internship information is present"
        );
      } else {
        improvements.push(
          "Add internship or work experience"
        );
      }

      // ACHIEVEMENTS
      if (
        text.includes("achievement") ||
        text.includes("hackathon") ||
        text.includes("certificate") ||
        text.includes("certification")
      ) {
        score += 15;

        strengths.push(
          "Achievements and certifications are included"
        );
      } else {
        improvements.push(
          "Add achievements or certifications"
        );
      }

      // CONTACT / PROFESSIONAL LINKS
      if (
        text.includes("@") ||
        text.includes("linkedin") ||
        text.includes("github")
      ) {
        score += 10;

        strengths.push(
          "Professional contact information is present"
        );
      } else {
        improvements.push(
          "Add professional contact information"
        );
      }

      // RESUME LENGTH
      const wordCount =
        resumeText
          .trim()
          .split(/\s+/)
          .length;

      if (wordCount >= 300) {
        score += 5;

        strengths.push(
          "Resume contains sufficient detail"
        );
      } else {
        improvements.push(
          "Add more relevant details to your resume"
        );
      }

      // FINAL ANALYSIS
      setAnalysis({
        score: Math.min(score, 100),
        strengths,
        improvements
      });

      setAnalyzing(false);
    }, 1000);
  };

  // -------------------------------
  // UI
  // -------------------------------

  return (
    <div className="resume-page">

      <div className="resume-container">

        <h1>
          📄 Resume Analyzer
        </h1>

        <p>
          Upload your resume and receive
          AI-powered feedback.
        </p>

        {/* UPLOAD CARD */}

        <div className="resume-upload-card">

          <h2>
            Upload Your Resume
          </h2>

          <p>
            Upload your resume in PDF or DOCX format.
          </p>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeUpload}
          />

          {/* SELECTED FILE */}

          {resume && (
            <div className="resume-selected">

              <p>
                <strong>
                  Selected File:
                </strong>
              </p>

              <p>
                {resume.name}
              </p>

              <button
                className="analyze-btn"
                onClick={handleAnalyze}
                disabled={analyzing}
              >
                {analyzing
                  ? "🔄 Analyzing..."
                  : "🤖 Analyze Resume"}
              </button>

              {/* EXTRACTED TEXT */}

              {resumeText && (
                <div className="resume-text-preview">

                  <h3>
                    📄 Extracted Resume Text
                  </h3>

                  <pre>
                    {resumeText}
                  </pre>

                </div>
              )}

            </div>
          )}

        </div>

        {/* ANALYSIS RESULT */}

        {analysis && (
          <div className="analysis-result">

            <h2>
              📊 Resume Analysis
            </h2>

            {/* SCORE */}

            <div className="resume-score">

              <span>
                Resume Score
              </span>

              <strong>
                {analysis.score}/100
              </strong>

            </div>

            {/* STRENGTHS */}

            <div className="analysis-section">

              <h3>
                💪 Strengths
              </h3>

              <ul>

                {analysis.strengths.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}

              </ul>

            </div>

            {/* IMPROVEMENTS */}

            <div className="analysis-section">

              <h3>
                📈 Areas to Improve
              </h3>

              <ul>

                {analysis.improvements.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}

              </ul>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}

export default ResumeAnalyzer;