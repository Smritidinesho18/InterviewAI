import { useNavigate } from "react-router-dom";
import "./HowItWorks.css";

function HowItWorks() {
  const navigate = useNavigate();

  return (
    <section className="how-section" data-aos="fade-up">
      <div className="container">

        <h2 className="text-center mb-5">
          How It Works
        </h2>

        <div className="row text-center">

          {/* STEP 1 */}
          <div className="col-md-4">
            <div
              className="step-card clickable-step"
              onClick={() => navigate("/resume-analyzer")}
            >
              <h1>1️⃣</h1>

              <h4>Upload Resume</h4>

              <p>
                Upload your resume to begin your interview journey.
              </p>

              <button className="step-btn">
                Upload Resume →
              </button>
            </div>
          </div>


          {/* STEP 2 */}
          <div className="col-md-4">
            <div
              className="step-card clickable-step"
              onClick={() => navigate("/mock-interview")}
            >
              <h1>2️⃣</h1>

              <h4>AI Conducts Interview</h4>

              <p>
                Our AI asks technical and HR questions based on your profile.
              </p>

              <button className="step-btn">
                Start Interview →
              </button>
            </div>
          </div>


          {/* STEP 3 */}
          <div className="col-md-4">
            <div
              className="step-card clickable-step"
              onClick={() => navigate("/mock-interview")}
            >
              <h1>3️⃣</h1>

              <h4>Get Feedback</h4>

              <p>
                Receive detailed feedback, scores, and improvement tips.
              </p>

              <button className="step-btn">
                Get Feedback →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;