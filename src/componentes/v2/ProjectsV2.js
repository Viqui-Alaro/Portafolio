import React, { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projects } from "../../contentV2";

export default function ProjectsV2({ t }) {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="projects" className="v2-projects">
      <div className="v2-section-head">
        <h2>{t.projects.title}</h2>
        <span className="v2-rule" />
      </div>

      <div className="v2-project-card">
        <div className="v2-project-img">
          <img src={project.img} alt={project.title} />
        </div>
        <div className="v2-project-info">
          <h3>{project.title}</h3>
          <p className="v2-project-desc">{project.descripcion}</p>
          <div className="v2-chips">
            {project.tags.map((tag) => (
              <span className="v2-chip v2-chip-light" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="v2-project-actions">
            {project.demo && (
              <a className="v2-btn v2-btn-sm" href={project.demo} target="_blank" rel="noreferrer">
                <OpenInNewIcon fontSize="small" /> {t.projects.demo}
              </a>
            )}
            {project.git && (
              <a className="v2-btn v2-btn-sm v2-btn-outline" href={project.git} target="_blank" rel="noreferrer">
                <GitHubIcon fontSize="small" /> {t.projects.code}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="v2-dots">
        {projects.map((p, i) => (
          <button
            key={p.title}
            className={"v2-dot" + (i === active ? " v2-dot-active" : "")}
            aria-label={`Ver proyecto ${p.title}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  );
}
