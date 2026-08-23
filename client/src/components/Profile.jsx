import { useState } from "react";

function Profile() {
    const user = JSON.parse(localStorage.getItem("user"));

    const [name, setName] = useState(user?.name || "");
     const [email, setEmail] = useState(user?.email || "");
      const [editing, setEditing] = useState(false);

    return (
        <div>
            <h1>My Profile</h1>

            <button type="button" onClick={() => setEditing(true)}>
                 Edit Profile
                  </button>

                  {editing && (
                    <div> <label>Name</label>
                    <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />

                    <label>Email</label>
                    <input type="email" value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                    <button type="button"  onClick={async () => {
                        try {
                            const response = await fetch("http://localhost:5000/api/auth/profile", {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body:JSON.stringify({
                                    userId: user.id,
                                    name,
                                    email,
                                }),
                        });
                        const data = await response.json();

                        if (response.ok) {
                             localStorage.setItem("user", JSON.stringify(data.user));

                        setEditing(false);

                        alert("Profile updated successfully!");
                        } else {
                            alert(data.message || "Profile update failed");
                        }
                    }  catch (error) {
                        console.error(error);
                        alert("Cannot connect to server");
                    }
                                }}>
                       
                        Save Changes
                        </button>

                    <button type="button" onClick={() => setEditing(false)}>
                        Cancel
                    </button>
                    </div>
                  )

                  }

            <p>Name: {user?.name || "Student"}</p>
            <p>Email: {user?.email || "student@example.com"}</p>

            <h2>Placement Progress</h2>

            <p>Coding Practice: 60%</p>
            <p>Aptitude Quiz: 40%</p>
            <p>Resume: 80%</p>
            <p>AI Interview: 20%</p>
        </div>
    );
}

export default Profile;