import { projectData } from "../projects";
// import "./ProjectDetail.css";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="body">
      {projectData.map((project) => (
        <div key={project.title} className="project-info">
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.alt} />
          </a>
          <div className='details'>
            <h4>{project.title}</h4>
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <p>
              <strong>Built Using:</strong> {project.tech}
            </p>
          <div className='links'>
            <a className='resume-link' href={project.site} target="_blank" rel="noopener noreferrer">
              Deployed App
            </a>
            <a className='resume-link' href={project.github} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
