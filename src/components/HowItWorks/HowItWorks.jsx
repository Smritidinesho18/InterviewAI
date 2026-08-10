import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-section" data-aos="fade-up">
      <div className="container">

        <h2 className="text-center mb-5">
          How It Works
        </h2>

        <div className="row text-center">

          <div className="col-md-4">
            <div className="step-card">
              <h1>1️⃣</h1>
              <h4>Upload Resume</h4>
              <p>
                Upload your resume to begin your interview journey.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="step-card">
              <h1>2️⃣</h1>
              <h4>AI Conducts Interview</h4>
              <p>
                Our AI asks technical and HR questions based on your profile.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="step-card">
              <h1>3️⃣</h1>
              <h4>Get Feedback</h4>
              <p>
                Receive detailed feedback, scores, and improvement tips.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;