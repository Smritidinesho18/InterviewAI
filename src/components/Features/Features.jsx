import "./Features.css";

function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">

        <h2 className="text-center mb-5">
          Why Choose InterviewAI?
        </h2>

        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="feature-card">
              <i className="bi bi-file-earmark-text-fill feature-icon"></i>
              <h4>Resume Analysis</h4>
              <p>Get AI-powered feedback on your resume.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="feature-card">
              <i className="bi bi-mic-fill feature-icon"></i>
              <h4>Mock Interview</h4>
              <p>Practice HR and Technical interviews with AI.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="feature-card">
              <i className="bi bi-robot feature-icon"></i>
              <h4>AI Feedback</h4>
              <p>Receive instant AI-powered feedback after every interview.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-4">
            <div className="feature-card">
              <i className="bi bi-code-slash feature-icon"></i>
              <h4>Coding Practice</h4>
              <p>Solve coding questions and improve your programming skills.</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4">
            <div className="feature-card">
              <i className="bi bi-graph-up-arrow feature-icon"></i>
              <h4>Progress Tracking</h4>
              <p>Track your interview performance and growth over time.</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4">
            <div className="feature-card">
              <i className="bi bi-lightbulb-fill feature-icon"></i>
              <h4>Smart Suggestions</h4>
              <p>Receive personalized tips to improve your interview skills.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Features;