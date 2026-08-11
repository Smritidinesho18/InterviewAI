import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";
import "./Dashboard.css";
function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return unsubscribe;
}, []);

  return (
    <div className="dashboard">

      <header className="dashboard-header">
        <div>
          <h1>
  Welcome, {user?.displayName || user?.email || "User"}! 👋
</h1>
          <p>Prepare smarter. Practice better. Get interview ready.</p>
        </div>

        <button
          className="profile-btn"
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>
      </header>


      <section className="dashboard-cards">

        <div className="dashboard-card">
          <h2>🎤 Mock Interview</h2>
          <p>
            Practice real interview questions and improve your confidence.
          </p>

          <button onClick={() => navigate("/mock-interview")}>
            Start Interview
          </button>
        </div>


        <div className="dashboard-card">
          <h2>💻 Coding Practice</h2>
          <p>
            Solve coding problems and improve your DSA skills.
          </p>

          <button onClick={() => navigate("/coding-practice")}>
            Start Coding
          </button>
        </div>


        <div className="dashboard-card">
          <h2>📄 Resume Analyzer</h2>
          <p>
            Analyze your resume and get useful improvement suggestions.
          </p>

          <button onClick={() => navigate("/resume-analyzer")}>
            Analyze Resume
          </button>
        </div>

      </section>


      <section className="progress-section">

        <h2>Your Progress</h2>

        <div className="progress-cards">

          <div>
            <h3>0</h3>
            <p>Mock Interviews</p>
          </div>

          <div>
            <h3>0</h3>
            <p>Coding Problems</p>
          </div>

          <div>
            <h3>0%</h3>
            <p>Overall Progress</p>
          </div>

        </div>

      </section>


      <button
  className="logout-btn"
  onClick={async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  }}
>
  Logout
</button>
    </div>
  );
}

export default Dashboard;