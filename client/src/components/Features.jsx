import "./Features.css";
import FeatureCard from "./FeatureCard";


const features = [
    {
        title: "🤖 AI Mock Interview",
        describton:"Practice AI-powered mock interviews."
    },
    {
          title: "📄 Resume Review",
        describton:"Get AI suggestions to improve your resume."
    },
    {
        title:"💻 Coding Practice",
        describton:"Solve coding questions and improve your DSA skills."
       
    }
];

function Features() {
    return (
        <section className="features">
            <h2>Our Features</h2>

           <div className="feature-container">
            {features.map((feature) => (
          <FeatureCard
          key={feature.title}
          title={feature.title}
          describtion={feature.describton}
          />
            ))}
            </div>
        </section>
    );
}
export default Features;