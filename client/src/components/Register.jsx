import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

const handleRegister = async (e) => {
    e.preventDefault ();

    try {
        const response = await fetch("http://localhost:5000/api/auth/register", {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
       },
       body: JSON.stringify({
        name,
        email,
        password,
       }),
        });
    
        const data = await response.json();

        if (response.ok) {
            alert(`Welcome ${name}! Registration successful.`);
            navigate("/login");
            setName(" ");
            setEmail(" ");
            setPassword(" ");
        } else {
            alert(data.message || "Registration failed");
        }
       } catch (error) {
            console.error(error);
            alert("Cannot connect to server");
        }
    };


    return (
        <div className="register-container">
            <h1>Create Account</h1>

           
             <form onSubmit={handleRegister}>
           alert(`Welcome ${name}! Registration successful.`);
          

                <label>Name</label>
                <input
                type="text"
                placeholder="Enter your name"
                value={name}

                onChange={(e) => setName(e.target.value)}
                />
             
             <label>Email</label>
                <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              
              <label>Password</label>
                <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Register
                </button>
            </form>
            
            <p className="login-link">
        Already have an account?{" "}
        <Link to="/login">Login</Link>
      </p>


        </div>
    );
}

export default Register;