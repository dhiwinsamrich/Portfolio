import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Github } from 'lucide-react';
import { HoverLink } from './WorkHoverPreview';

const ProjectItem = ({ 
  project, 
  handleHoverStart, 
  handleHoverMove, 
  handleHoverEnd
}) => {
  // Split description and insert hover links for keywords
  const renderDescription = (description, keywords) => {
    if (!keywords || keywords.length === 0) {
      return <p className="work-description">{description}</p>;
    }

    let parts = [description];
    keywords.forEach((keyword, keywordIndex) => {
      const newParts = [];
      parts.forEach((part, partIndex) => {
        if (typeof part === 'string') {
          const index = part.indexOf(keyword.text);
          if (index !== -1) {
            const before = part.substring(0, index);
            const after = part.substring(index + keyword.text.length);
            newParts.push(
              before,
              <HoverLink
                key={`${keyword.key}-${keywordIndex}-${partIndex}`}
                previewKey={keyword.key}
                onHoverStart={handleHoverStart}
                onHoverMove={handleHoverMove}
                onHoverEnd={handleHoverEnd}
              >
                {keyword.text}
              </HoverLink>,
              after
            );
          } else {
            newParts.push(part);
          }
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    return <p className="work-description">{parts}</p>;
  };

  return (
    <>
      <div className="work-item">
        <div className="work-header">
          <div className="work-number-title">
            <span className="work-number">{project.number}</span>
            <div className="work-name-with-icons">
              <h4 className="work-name">
                <HoverLink
                  previewKey={project.id}
                  onHoverStart={handleHoverStart}
                  onHoverMove={handleHoverMove}
                  onHoverEnd={handleHoverEnd}
                >
                  {project.name}
                </HoverLink>
              </h4>
              <div className="work-header-links">
                <a href={project.liveSiteUrl} className="work-header-link" title="Live Site">
                  <Globe size={18} />
                </a>
                <a href={project.githubUrl} className="work-header-link" title="GitHub">
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="work-content">
          {renderDescription(project.description, project.hoverKeywords)}
          <div className="work-links">
            <Link
              to={`/project/${project.id}`}
              className="work-link cursor-pointer"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;

