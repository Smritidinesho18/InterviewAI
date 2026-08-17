import { useNavigate } from "react-router-dom";
import "./Pricing.css";

function Pricing() {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">

        <h2 className="text-center mb-5">
          Choose Your Plan
        </h2>

        <div className="pricing-grid">

          {/* FREE */}
          <div className="price-card">

            <h3>Free</h3>

            <h1>₹0</h1>

            <p>✔ 5 Mock Interviews</p>
            <p>✔ Resume Analysis</p>
            <p>✔ Basic AI Feedback</p>

            <button
              className="pricing-btn outline-btn"
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>

          </div>


          {/* PRO */}
          <div className="price-card popular">

            <div className="popular-badge">
              Most Popular
            </div>

            <h3>Pro</h3>

            <h1>₹499</h1>

            <p>✔ Unlimited Interviews</p>
            <p>✔ Advanced AI Feedback</p>
            <p>✔ Coding Practice</p>

            <button
              className="pricing-btn primary-btn"
              onClick={() => navigate("/register")}
            >
              Buy Now
            </button>

          </div>


          {/* PREMIUM */}
          <div className="price-card">

            <h3>Premium</h3>

            <h1>₹999</h1>

            <p>✔ Unlimited Interviews</p>
            <p>✔ Advanced AI Feedback</p>
            <p>✔ Coding Practice</p>
            <p>✔ Priority Support</p>

            <button
              className="pricing-btn primary-btn"
              onClick={() => navigate("/register")}
            >
              Buy Now
            </button>

          </div>


          {/* ENTERPRISE */}
          <div className="price-card">

            <h3>Enterprise</h3>

            <h1>Custom</h1>

            <p>✔ Team Access</p>
            <p>✔ HR Dashboard</p>
            <p>✔ Analytics</p>
            <p>✔ Dedicated Support</p>

            <button
              className="pricing-btn outline-btn"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;