import { useState } from "react";

function FormPractice() {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (name === "") {
            setError("Please enter your name");
            return;
        }

        setError("");
        console.log(name);
        setName("");
    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)}
         />

         {error && <p>{error}</p>}

         <p>Hello, {name}</p>

            <button type="button" onClick={() =>{
             setName("");
             setError("");
            }}
            >
                Clear
            </button>

            <button type="submit">
                Submit
            </button>
        </form>

        </div>
    );

}

export default FormPractice;