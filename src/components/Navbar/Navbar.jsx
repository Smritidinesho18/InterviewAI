import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">

      <div className="container">

        <Link className="navbar-brand" to="/">
  🤖 InterviewAI
</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbar"
        >

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
  Home
</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
  Features
</Link>

            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
  Pricing
</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
  FAQ
</Link>
            </li>

          </ul>

          <div>

            <Link to="/login" className="btn btn-outline-light me-2">
  Login
</Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;