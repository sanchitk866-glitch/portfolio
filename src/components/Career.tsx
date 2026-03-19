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
                <h4>Founder & Developer</h4>
                <h5>BioEdge India</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Built and deployed an AI-powered edtech platform serving life sciences students, integrating Google Gemini API and Notion API on a Vercel serverless backend.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern - Biodiversity</h4>
                <h5>Ecoensa Private Limited</h5>
              </div>
              <h3>2026 - Present</h3>
            </div>
            <p>
              Conducted in-depth ecological research on biodiversity patterns, synthesizing field data into actionable conservation reports.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Work Intern</h4>
                <h5>InAmigos Foundation</h5>
              </div>
              <h3>2026 - Present</h3>
            </div>
            <p>
              Delivered community outreach programs and represented student platforms on campus, driving enrollment and developing stakeholder communication skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
