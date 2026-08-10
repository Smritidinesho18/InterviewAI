import "./Hero.css";
import hero from "../../assets/hero.png";

function Hero() {
  return (
    <section  id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <div className="hero-badge">
  🚀 AI Powered Interview Platform
</div>

            <h1 className="display-2 fw-bold">
  Ace Every <span>Interview</span> with AI
</h1>
            <p className="lead mt-4">
              Practice HR, Technical and Coding Interviews with intelligent AI
              feedback.
            </p>

            <div className="mt-4">
              <button className="btn btn-primary btn-lg me-3">
                Start Free
              </button>

              <button className="btn btn-outline-primary btn-lg">
                Watch Demo
              </button>
            </div>

            <div className="hero-stats">

  <div className="stat-card">
    <h3>10K+</h3>
    <p>Students</p>
  </div>

  <div className="stat-card">
    <h3>95%</h3>
    <p>Success Rate</p>
  </div>

  <div className="stat-card">
    <h3>24/7</h3>
    <p>AI Support</p>
  </div>

</div>

          </div>

          <div className="col-lg-6 text-center">
            <img
              src={hero}
              alt="Hero"
              className="img-fluid hero-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;