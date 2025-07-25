import './css/profile.css';
import profile_pic from '../../assets/Profile/Profile_pic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAward, faCertificate, faCodeCommit, faCrown, faEnvelope, faFilePdf, faGraduationCap, faLightbulb, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import resume from '../../assets/Profile/Mohammed_Huzaif_Ahmed_Resume.pdf';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';


const Profile = () => {
    return (
        <div className="profile-container">
            <h2 className="section-title">
                Profile
            </h2>
            <div className="profile-content">
                <div className="profile-header">
                    <div className="profile-image">
                        <img src={profile_pic} alt="Profile" />
                        <div className="profile-social">
                            <a href="https://github.com/Huzaif-Ahmed" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="fab fa-github" icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/mohammed-huzaif-ahmed-71048a255/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="fab fa-linkedin" icon={faLinkedin} />
                            </a>
                            <a href="mailto:huzaif.demha@gmail.com">
                                <FontAwesomeIcon className="fas fa-envelope" icon={faEnvelope} />
                            </a>
                            <a href={resume} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="fas fa-file-pdf" icon={faFilePdf} />
                            </a>
                        </div>
                    </div>
                    <div className="profile-intro">
                        <h1>Huzaif Ahmed</h1>
                        <h3>Full Stack Developer</h3>
                        <p className="profile-tagline">
                            Building innovative solutions at the intersection of web development and machine learning.
                        </p>
                        <div className="profile-quick-info">
                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span>Hyderabad, India</span>
                            </div>
                            <div className="info-item">
                                <i className="fas fa-briefcase"></i>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <span>Open to opportunities</span>
                            </div>
                            <div className="info-item">
                                <FontAwesomeIcon icon={faGraduationCap} className="fas fa-graduation-cap" />
                                <span>B.Tech Computer Science</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profile-section">
                    <h3 className="section-subtitle">
                        <i className="fas fa-user"></i> About Me
                    </h3>
                    <div className="about-content">
                        <p>
                            I'm a curious and driven software engineer with a strong interest in ideation, system design, and full-stack development. Over the years, I've built scalable web platforms, contributed to AI-powered solutions, and collaborated with product teams to ship real-world impact.
                        </p>
                        <p>
                            With hands-on experience at companies like Experian and Catalog(now Hashira), I've worked across technologies such as React, Spring Boot, Golang, and AWS, while also exploring Machine Learning and Gen-AI applications. I thrive in fast-paced, collaborative environments where technology meets creativity.
                        </p>
                        <p>
                            Whether it's contributing to open-source, leading GDSC initiatives, or qualifying for ICPC Regionals, I'm constantly learning and seeking opportunities that combine innovation with meaningful outcomes.
                        </p>
                    </div>
                </div>

                <div className="profile-section">
                    <h3 className="section-subtitle">
                        <i className="fas fa-trophy"></i> Key Achievements
                    </h3>
                    <div className="achievements-grid">
                        <div className="achievement-card">
                            <div className="achievement-icon">
                                <FontAwesomeIcon icon={faAward} className="fas fa-award"></FontAwesomeIcon>
                            </div>
                            <div className="achievement-content">
                                <h4>ICPC Regionalist</h4>
                                <p> {"Qualified for ICPC (International Collegiate Programming Contest) Amritapuri Regionals with AIR 187"}</p>
                            </div>
                        </div>

                        <div className="achievement-card">
                            <div className="achievement-icon">
                                <i className="fas fa-lightbulb"></i>
                                <FontAwesomeIcon icon={faLightbulb} />
                            </div>
                            <div className="achievement-content">
                                <h4>Research Paper</h4>
                                <p>Published a research paper on analysis of machine learning and deep learning algorithms in genomics.</p>
                            </div>
                        </div>

                        <div className="achievement-card">
                            <div className="achievement-icon">
                                <FontAwesomeIcon icon={faCodeCommit} className="fas fa-code-branch"></FontAwesomeIcon>
                            </div>
                            <div className="achievement-content">
                                <h4>Open Source Contributor</h4>
                                <p>Actively contributed to React and Firebase Projects with over 200+ pull requests successfully merged.</p>
                            </div>
                        </div>
                        <div className="achievement-card">
                            <div className="achievement-icon">
                                <i className="fas fa-Crown"></i>
                                <FontAwesomeIcon icon={faCrown} />
                            </div>
                            <div className="achievement-content">
                                <h4>Leadership</h4>
                                <p> Led a chapter of 80+ enthusiastic members to work towards goals that promote GDSC community service,
                                    academics, and unity, demonstrating practical and leadership skills.</p>
                            </div>
                        </div>

                        <div className="achievement-card">
                            <div className="achievement-icon">
                                <i className="fas fa-certificate"></i>
                                <FontAwesomeIcon icon={faCertificate} className="fas fa-certificate" />
                            </div>
                            <div className="achievement-content">
                                <h4>AWS Certified Cloud Practitioner</h4>
                                <p>Obtained professional certification demonstrating expertise in designing distributed systems on AWS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;