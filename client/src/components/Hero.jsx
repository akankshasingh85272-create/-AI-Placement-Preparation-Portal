import heroImg from "../assets/hero.png";
import { useState } from "react";
import { Link } from "react-router-dom";


function Hero({ title }) {
     const [heroTitle, setHeroTitle] = useState(title);
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     function changeTitle() {
      setHeroTitle("Welcome to React");
    }

      function toggleLogin() {
          setIsLoggedIn(!isLoggedIn);

          if (!isLoggedIn) {
            setHeroTitle("Welcome Back!");
          } else {
            setHeroTitle(title);
          }
      }
    
    return (
        <main className="hero">
        <div className="hero-text" >
        <h1>{heroTitle}</h1>

        <h2>
          {isLoggedIn ? "Welcome, Priya" : "Please Login"}
          </h2>

       <button onClick={changeTitle}> 
        Change Title
        </button>

        <button onClick={toggleLogin}>
          Login / Logout
        </button>

        <p>
            Learn DSA, Build Projects, Track Companies and Get AI Guidance.
          </p>

         <Link to="/login" className="start-btn"> 
          Get Started
         </Link>
      </div>

        <div className="hero-image" >
     <img src={heroImg} alt="AI Placement Student" />
      </div>

         
 
     </main>
      
    );
 }

 export default Hero;
 