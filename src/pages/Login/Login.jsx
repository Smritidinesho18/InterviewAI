import "./Login.css";

function Login() {
  return (
    <div className="login-page">

      <div className="login-card">

        <h1>🤖 InterviewAI</h1>

        <h3>Welcome Back 👋</h3>

        <form>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p>
          Don't have an account? <a href="#">Register</a>
        </p>

      </div>

    </div>
  );
}

export default Login;