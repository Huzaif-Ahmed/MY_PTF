import { AnimatedList } from "../AnimatedList";
import projects_data from "../../metadata/projects";
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
      <h2 style={{ marginBottom: '15px', fontSize: '2rem' }}>
        Projects
      </h2>

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
              <span key={idx}>{tag}</span>
            ))}
          </div>
        </div>
        <div className='project-item-desc'>
          <p>{description}</p>
        </div>
        <div className='project-item-links'>
          {githubLink && (
            <a href={githubLink} className="project-link github" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-github"></i> View Source
            </a>
          )}
          {(liveDemo || demoLink) && (
            <a href={liveDemo || demoLink} className="project-link demo" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-external-link"></i> Live Demo
            </a>
          )}
          {
            figmaLink && (
              <a href={figmaLink} className="project-link figma" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-figma"></i> View Figma Design
              </a>
            )
          }
          {ResearchLink && (
            <a href={ResearchLink} className="project-link research" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-book"></i> View Research Paper
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

