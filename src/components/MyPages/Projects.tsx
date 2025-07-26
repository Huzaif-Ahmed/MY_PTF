
import { AnimatedList } from "../AnimatedList";
import projects_data from "../../metadata/projects";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faFigma 
} from '@fortawesome/free-brands-svg-icons';
import {
  faExternalLinkAlt,
  faBook
} from '@fortawesome/free-solid-svg-icons';
import './css/project.css';

const Projects = () => {
  const projectItems = projects_data.map((project, index) => (
    <Project
      key={index}
      title={project.title}
      image={project.image}
      description={project.description}
      tags={project.tags}
      githubLink={project.githubLink}
      demoLink={project.demoLink}
      liveDemo={project.liveDemo}
      figmaLink={project.figmaLink}
      ResearchLink={project.ResearchLink}
    />
  ));

  return (
    <div className="profile-container">
      <h2 className="section-title">Projects</h2>
      <p className="section-intro">
        Here are some of my featured projects that showcase my skills and experience in
        web development, machine learning, and creative design.
      </p>
      <AnimatedList items={projectItems} />
    </div>
  );
};

export default Projects;

interface ProjectProps {
  title: string;
  image: string;
  description: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
  liveDemo?: string;
  figmaLink?: string;
  ResearchLink?: string;
}

const Project = ({
  title,
  image,
  description,
  tags,
  githubLink,
  demoLink,
  liveDemo,
  figmaLink,
  ResearchLink
}: ProjectProps) => {
  return (
    <div className='project-item'>
      <div className="leftside">
        <div className='project-item-pic'>
          <img src={image} alt={`${title} Preview`} />
        </div>
      </div>
      <div className="rightside">
        <div className='project-item-title'>
          <h3>{title}</h3>
          <div className="project-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="technology-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className='project-item-desc'>
          <p>{description}</p>
        </div>
        <div className='project-item-links'>
          {githubLink && (
            <a href={githubLink} className="project-link github" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} /> View Source
            </a>
          )}
          {(liveDemo || demoLink) && (
            <a href={liveDemo || demoLink} className="project-link demo" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
            </a>
          )}
          {figmaLink && (
            <a href={figmaLink} className="project-link figma" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFigma} /> View Figma Design
            </a>
          )}
          {ResearchLink && (
            <a href={ResearchLink} className="project-link research" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faBook} /> View Research Paper
            </a>
          )}
        </div>
      </div>
    </div>
  );
};