function Card({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

function ChildrenPractice() {
    return(
        <Card>
            <h2>Hello Akanksha</h2>
            <p>I am learning the children prop.</p>
        </Card>
    );
}

export default ChildrenPractice;
