//  {title,describtion} here we receive 2 props from Features.jsx
 
 function FeatureCard({ title, describtion }) {
    return(
        <div className="feature-card">
            <h3>{title}</h3>
            <p>{describtion}</p>
        </div>
    );
}

export default FeatureCard;