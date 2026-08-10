import "./Register.css";

function Register() {
  return (
    <div className="register-page">

      <div className="register-card">

        <h1>🤖 InterviewAI</h1>

        <h3>Create Your Account</h3>

        <form>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>

      </div>

    </div>
  );
}

export default Register;