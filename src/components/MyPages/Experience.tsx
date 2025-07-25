import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuilding, faCalendar, faChevronRight, faExternalLinkAlt, faCertificate, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './css/Experience.css';

const experiences = [
  {
    title: "Product Development Engineering Intern",
    company: "Experian",
    period: "Dec 2024 - Present",
    location: "Hyderabad, India",
    description: [
      "Assisting senior software engineers across various technologies in an enterprise development environment.",
      "Contributing to scalable product development and collaborating with cross-functional teams.",
      "Gaining hands-on experience with secure, production-grade systems and cloud-based solutions."
    ],
    technologies: ["React", "Spring Boot", "AWS", "Git", "CI/CD" ,"Spring Boot", ".NET"],
    // certificates: [
    //   {
    //     name: "Experian Internship Offer Letter",
    //     url: "https://example.com/experian-offer",
    //     type: "document" // Can be "certificate", "document", "letter", etc.
    //   }
    // ]
  },
  {
    title: "Freelance Developer",
    company: "EDHIRING (Real-Time Hiring Platform)",
    period: "Jun 2024 - Sept 2024",
    location: "Remote",
    description: [
      "Led frontend development and supported backend engineers to build a robust hiring platform.",
      "Implemented secure OAuth-based user verification with OTP flow and job board integration.",
      "Built a LaTeX editor with interactive templates and contributed to listing over 800 jobs on the platform."
    ],
    technologies: ["Nodejs", "Java", "OAuth 2.0", "React", "GitHub Actions"],
    // certificates: [
    //   {
    //     name: "Project Completion Certificate",
    //     url: "https://example.com/edhiring-certificate",
    //     type: "certificate"
    //   },
    //   {
    //     name: "Client Recommendation",
    //     url: "https://example.com/recommendation-letter",
    //     type: "letter"
    //   }
    // ]
  },
  {
    title: "Associate Software Engineer Intern",
    company: "Catalog",
    period: "Apr 2024 - Jun 2024",
    location: "Hyderabad, India",
    description: [
      "Updated the company's website UI based on Figma designs, contributing to a transactional revenue impact of $700 million.",
      "Performed API testing and backend verification using Go for upcoming seasonal services.",
      "Built a Storybook-based React component system for the design team to streamline UI workflows."
    ],
    technologies: ["React", "Storybook", "Golang", "Figma", "PostgreSQL", "Docker"],
    certificates: [
      {
        name: "Catalog Internship Certificate",
        url: "https://drive.google.com/file/d/1Z149uUbJxaC4QTheqP58x5EUmoAzAGiV/view",
        type: "certificate"
      }
    ]
  }
];

// Helper function to get the appropriate icon for certificate type
const getCertificateIcon = (type: string) => {
  switch(type) {
    case 'certificate':
      return faCertificate;
    case 'letter':
      return faFileAlt;
    case 'document':
    default:
      return faFileAlt;
  }
};

const Experience = () => {
    return (
        <div className="experience-container">
            <h2 className="section-title">
              Experience
            </h2>
            <div className="experience-content">
              <div className="experience-timeline">
                {experiences.map((exp, index) => (
                  <div className="experience-item" key={index}>
                    <div className="experience-item-header">
                      <div className="experience-icon">
                        <FontAwesomeIcon icon={faBriefcase} />
                      </div>
                      <div className="experience-title-group">
                        <h3>{exp.title}</h3>
                        <div className="experience-company">
                          <FontAwesomeIcon icon={faBuilding} className="info-icon" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="experience-period">
                          <FontAwesomeIcon icon={faCalendar} className="info-icon" />
                          <span>{exp.period}</span>
                          <span className="experience-location">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="experience-details">
                      <ul className="experience-description">
                        {exp.description.map((point, i) => (
                          <li key={i}>
                            <FontAwesomeIcon icon={faChevronRight} className="bullet-icon" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {exp.certificates && exp.certificates.length > 0 && (
                        <div className="experience-certificates">
                          {exp.certificates.map((cert, i) => (
                            <a 
                              key={i}
                              href={cert.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="certificate-link"
                            >
                              <FontAwesomeIcon icon={getCertificateIcon(cert.type)} />
                              <span>{cert.name}</span>
                              <FontAwesomeIcon icon={faExternalLinkAlt} className="external-link-icon" />
                            </a>
                          ))}
                        </div>
                      )}
                      
                      <div className="experience-technologies">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="technology-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
    );
};

export default Experience;