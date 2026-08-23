import { useState } from "react";
import "./Login.css";
import { Link, useNavigate} from "react-router-dom";




function Login() {
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      
      console.log("LOGIN RESPONSE:", data);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login successful!");

        navigate("/dashboard");
      } else {
        alert(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      alert("Cannot connect to server");
    }
  };


    return (
        <div className="login-container">
            <h1>Login</h1>
        
              <form onSubmit={handleLogin}>
            
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

                <p className="forgot-password">
                    Forgot Password?
                </p>
              
              <p className="register-link">
                  Don't have an account?{" "}
            <Link to="/register">Register</Link>
             </p>

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;