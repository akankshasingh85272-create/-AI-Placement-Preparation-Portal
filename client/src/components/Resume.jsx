function Resume() {
    return (
        <div>
            <h1>Resume Builder</h1>

            <p>Create and manage your placement resume.</p>

            <input type="text"
            placeholder="Enter your name" />

            <input type="email"
            placeholder="Enter your email" />

            <textarea placeholder="Enter your skills"
            rows="5" />

            <button type="button">
                Save Resume
            </button>
            
        </div>
    ); 
}

export default Resume;