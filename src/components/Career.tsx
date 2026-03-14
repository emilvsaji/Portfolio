import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>InnoByte Services</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built dynamic React interfaces, reusable components, and
              responsive Tailwind layouts. Integrated APIs and optimized
              rendering and state management for better performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>ApexPlanet Software Pvt Ltd (Remote)</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Developed responsive webpages with HTML, CSS, and JavaScript,
              implemented interactive UI components, integrated APIs, and
              improved frontend performance through testing and debugging.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer (Freelance)</h4>
                <h5>CatchMyBus</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a mobile-responsive bus search platform with React,
              TypeScript, Node.js, and Firebase, including REST APIs,
              authentication, route/fare features, and an admin dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
