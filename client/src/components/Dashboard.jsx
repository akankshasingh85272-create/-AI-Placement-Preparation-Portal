import { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";


function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
    return(
        <div className="dashboard-container">
    
      <div className="dashboard-navbar">
        <h2>AI Placement Portal</h2>

        <Link to="/profile"> Profile</Link>

          <Link to="/" onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
          }}>
           Logout
          </Link>
      
      </div>
      
            <h1>Welcome, {user?.name || "Student"}!</h1>

            <p>Welcome to your placement prepration portal.</p>

            <div className="dashboard-cards">
            <Link to="/coding" className="dashboard-card">
            <h2>Coding Practice</h2>
              <p>Practice coding questions.</p>
              <button>Start Practice</button>
                </Link>

                <Link to="/aptitude" className="dashboard-card">
                 <h2>Aptitude Quiz</h2>
                 <p>Test your aptitude skills.</p>
                 <button>Take Quiz</button>
                  </Link>

                  <Link to="/resume" className="dashboard-card">
                 <h2>Resume</h2>
                 <p>Build or upload your resume.</p>
               <button >Build Resume</button>
                  </Link>

                  
                  <Link to="/interview" className="dashboard-card">
                 <h2> AI Interview</h2>
                 <p>Prepare for interviews with AI.</p>
               <button type="button">
                Start Interview
                </button>
                  </Link>
                   

            </div>
            <div className="progress-section">
                <h2>Your Progress</h2>

  <div className="progress-item">
    <p>Coding Practice: 60%</p>
    <div className="progress-bar">
      <div className="progress-fill coding-progress"></div>
    </div>
  </div>

  <div className="progress-item">
    <p>Aptitude Quiz: 40%</p>
    <div className="progress-bar">
      <div className="progress-fill aptitude-progress"></div>
    </div>
  </div>

  <div className="progress-item">
    <p>Resume: 80%</p>
    <div className="progress-bar">
      <div className="progress-fill resume-progress"></div>
    </div>
  </div>

  <div className="progress-item">
    <p>AI Interview: 20%</p>
    <div className="progress-bar">
      <div className="progress-fill interview-progress"></div>
    </div>
  </div>
</div>
</div>
    );
}

export default Dashboard;