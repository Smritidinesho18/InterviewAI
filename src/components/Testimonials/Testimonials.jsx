import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonial-section" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-5">What Our Users Say</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="testimonial-card">
              <p>"InterviewAI helped me gain confidence before my placement interviews."</p>
              <h5>Rahul Sharma</h5>
              <span>CSE Student</span>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial-card">
              <p>"The AI feedback was detailed and helped me improve my communication."</p>
              <h5>Priya Patel</h5>
              <span>Software Engineer</span>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial-card">
              <p>"A fantastic platform for interview preparation. Highly recommended!"</p>
              <h5>Amit Verma</h5>
              <span>Final Year Student</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;