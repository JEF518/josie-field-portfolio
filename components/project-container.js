import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ProjectContainer({ projects }) {

  return (
    <div className="projects-container">
      {projects.map(function (project) {
        console.log(project.myRole);
        return (
          <div className="projects-container__project-card blur-card">
            <div className="thumbnail">
              <a href={project.link} target="_blank">
                <img src={`images/${project.image}`}></img>
              </a>
            </div>
            <div className="metadata">
              <u className="metadata-field">{project.title}</u>
              <br />
              <a className="metadata-field" href={project.link} target="_blank">
                Link&nbsp;
                <FontAwesomeIcon icon={faChevronRight} size="xs" />
              </a>
              <br />
              <span className="metadata-field">{project.description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
