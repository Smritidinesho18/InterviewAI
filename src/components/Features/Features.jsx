import { useNavigate } from "react-router-dom";
import "./Features.css";

function Features() {
  const navigate = useNavigate();

  return (
    <section id="features" className="features-section">
      <div className="container">

        <h2 className="text-center mb-5">
          Why Choose InterviewAI?
        </h2>

        <div className="row g-4">

          {/* Resume Analysis */}
          <div className="col-md-4">
            <div
              className="feature-card clickable-feature"
              onClick={() => navigate("/resume-analyzer")}
            >
              <i className="bi bi-file-earmark-text-fill feature-icon"></i>

              <h4>Resume Analysis</h4>

              <p>
                Get AI-powered feedback on your resume.
              </p>

              <button className="feature-btn">
                Analyze Resume →
              </button>
            </div>
          </div>


          {/* Mock Interview */}
          <div className="col-md-4">
            <div
              className="feature-card clickable-feature"
              onClick={() => navigate("/mock-interview")}
            >
              <i className="bi bi-mic-fill feature-icon"></i>

              <h4>Mock Interview</h4>

              <p>
                Practice HR and Technical interviews with AI.
              </p>

              <button className="feature-btn">
                Start Interview →
              </button>
            </div>
          </div>


          {/* AI Feedback */}
          <div className="col-md-4">
            <div
              className="feature-card clickable-feature"
              onClick={() => navigate("/mock-interview")}
            >
              <i className="bi bi-robot feature-icon"></i>

              <h4>AI Feedback</h4>

              <p>
                Receive instant AI-powered feedback after every interview.
              </p>

              <button className="feature-btn">
                Get Feedback →
              </button>
            </div>
          </div>


          {/* Coding Practice */}
          <div className="col-md-4">
            <div
              className="feature-card clickable-feature"
              onClick={() => navigate("/coding-practice")}
            >
              <i className="bi bi-code-slash feature-icon"></i>

              <h4>Coding Practice</h4>

              <p>
                Solve coding questions and improve your programming skills.
              </p>

              <button className="feature-btn">
                Start Coding →
              </button>
            </div>
          </div>


          {/* Progress Tracking */}
          <div className="col-md-4">
            <div
              className="feature-card clickable-feature"
              onClick={() => navigate("/dashboard")}
            >
              <i className="bi bi-graph-up-arrow feature-icon"></i>

              <h4>Progress Tracking</h4>

              <p>
                Track your interview performance and growth over time.
              </p>

              <button className="feature-btn">
                View Progress →
              </button>
            </div>
          </div>


          {/* Smart Suggestions */}
          <div className="col-md-4">
            <div
              className="feature-card clickable-feature"
              onClick={() => navigate("/resume-analyzer")}
            >
              <i className="bi bi-lightbulb-fill feature-icon"></i>

              <h4>Smart Suggestions</h4>

              <p>
                Receive personalized tips to improve your interview skills.
              </p>

              <button className="feature-btn">
                Get Suggestions →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;