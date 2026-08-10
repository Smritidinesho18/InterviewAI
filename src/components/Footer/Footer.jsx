import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" >
      <div className="container text-center">

        <h3>InterviewAI</h3>

        <p>
          Practice smarter. Get hired faster.
        </p>

        <div cla
        ssName="footer-links">

          <a href="#">Home</a>

          <a href="#">Features</a>

          <a href="#">Pricing</a>

          <a href="#">FAQ</a>

        </div>

        <hr />

        <p className="copyright">
          © 2026 InterviewAI. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;