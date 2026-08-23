import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from "./assets/hero.png";
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from"./components/Features";
import ChildrenPractice from "./components/ChildrenPractice";
import FormPractice from "./components/FormPractice";
import EffectPractice from './components/EffectPractice';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CodingPrctice from './components/CodingPractice';
import AptitudeQuiz from "./components/AptitudeQuiz";
import Resume from "./components/Resume";
import Interview from "./components/Interview";
import Profile from "./components/Profile";


function Home() {
  return (
    <div>

       <Navbar />
       <Hero title="AI Placement Preparation" />
         <Features />
         <ChildrenPractice />
         <FormPractice />
         <EffectPractice />

         
      <section className="about">

  <h2>About Our Platform</h2>

  <p>
    AI Placement Preparation Portal helps students prepare for placements
    by providing DSA practice, project guidance, company updates, and AI assistance.
  </p>

</section>

<section className="Features">

  <h2>Our Features</h2>
  
  <div className="feature-container">

    <div className="feature-card">
      <h3>📚 DSA Practice </h3>
      <p>Practice coding questions for placements.</p>
    </div>

     <div className="feature-card">
      <h3> 💻 Projects</h3>
      <p>Build real-world projects with guidance.</p>
     </div>

      <div className="feature-card">
        <h3> 🏢 Company Updates</h3>
        <p>Get the latest placement and company news.</p>
      </div>

       <div className="feature-card">
        <h3> 🤖 AI Guidance</h3>
        <p>Receive AI-powered interview prepration.</p>
       </div>

  </div>
</section>

<footer className="footer"> 

<h3>AI Placement Prepration Portal</h3>

<p>© 2026 All Rights Reserved.</p>


</footer>
  </div>
  );
}


function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  console.log("TOKEN:", token);

  if (!token) {
    window.location.href = "/login";
    return null;
  }

  return children;
}


function App() {
  return (
     <BrowserRouter>
           <Routes>
             <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
                <Route
                 path="/dashboard" 
                 element={
                 <ProtectedRoute>
                   <Dashboard />
                 </ProtectedRoute>
              } 
              />
            <Route path="/coding" element={<CodingPrctice />}/>
            <Route path="/aptitude" element={<AptitudeQuiz />}/>
            <Route path="/resume" element={<Resume />}/>
            <Route path="/interview" element={<Interview />}/>
              <Route path="/profile" element={<Profile />}/>
          
          </Routes>
    
      </BrowserRouter>
  );
}


export default App;