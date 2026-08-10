import "./FAQ.css";

function FAQ() {
  return (
    <section className="faq-section" data-aos="fade-up">
      <div className="container">

        <h2 className="text-center fw-bold mb-5">
          Frequently Asked Questions
        </h2>

        <div className="accordion" id="faqAccordion">

          {/* Question 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question1"
              >
                Is InterviewAI free to use?
              </button>
            </h2>

            <div
              id="question1"
              className="accordion-collapse collapse show"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes! You can use the basic features for free. Upgrade anytime for premium features.
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question2"
              >
                Does InterviewAI give AI feedback?
              </button>
            </h2>

            <div
              id="question2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes. After every interview, the AI provides detailed feedback, scores, and suggestions for improvement.
              </div>
            </div>
          </div>

          {/* Question 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question3"
              >
                Can I practice coding interviews?
              </button>
            </h2>

            <div
              id="question3"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes. InterviewAI supports coding practice along with HR and technical interview preparation.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FAQ;