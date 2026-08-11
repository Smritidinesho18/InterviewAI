import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login");
      }
    });

    return unsubscribe;
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-avatar">
          👤
        </div>

        <h1>My Profile</h1>

        <div className="profile-info">

          <div>
            <span>Name</span>
            <h3>{user.displayName || "Not available"}</h3>
          </div>

          <div>
            <span>Email</span>
            <h3>{user.email}</h3>
          </div>

        </div>

        <button
          className="back-dashboard-btn"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>

        <button
          className="profile-logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;