import "./Pricing.css";

function Pricing() {
  return (
    <section  id="pricing" className="pricing-section" >
      <div className="container">

        <h2 className="text-center mb-5">
          Choose Your Plan
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="price-card">
              <h3>Free</h3>
              <h1>₹0</h1>

              <p>✔ 5 Mock Interviews</p>
              <p>✔ Resume Analysis</p>
              <p>✔ Basic AI Feedback</p>

              <button className="btn btn-outline-primary mt-3">
                Get Started
              </button>
            </div>
          </div>
<div className="col-md-4">
  <div className="price-card popular">

    <div className="popular-badge">
      Most Popular
    </div>

    <h3>Pro</h3>
    <h1>₹499</h1>

    <p>✔ Unlimited Interviews</p>
    <p>✔ Advanced AI Feedback</p>
    <p>✔ Coding Practice</p>

    <button className="btn btn-primary mt-3">
      Buy Now
    </button>

  </div>
</div>
          <div className="col-md-4">
            <div className="price-card">
              <h3>Pro</h3>
              <h1>₹499</h1>
              <p>✔ Unlimited Interviews</p>
              <p>✔ Advanced AI Feedback</p>
              <p>✔ Coding Practice</p>

              <button className="btn btn-primary mt-3">
                Buy Now
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="price-card">
              <h3>Enterprise</h3>
              <h1>Custom</h1>

              <p>✔ Team Access</p>
              <p>✔ HR Dashboard</p>
              <p>✔ Analytics</p>

              <button className="btn btn-outline-primary mt-3">
                Contact Us
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Pricing;