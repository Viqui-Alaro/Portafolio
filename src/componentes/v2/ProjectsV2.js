import React, { useState, useEffect } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import AndroidIcon from "@mui/icons-material/Android";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { projects } from "../../contentV2";

// Función auxiliar para detectar si la ruta es un video
const isVideo = (url) => {
  if (typeof url !== "string") return false;
  return url.match(/\.(mp4|webm|ogg)$/i) !== null;
};

// Mini-slider independiente inteligente (Imágenes y Videos)
const ProjectSlider = ({ images, singleImg, title }) => {
  const imgArray = images && images.length > 0 ? images : singleImg ? [singleImg] : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev === imgArray.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? imgArray.length - 1 : prev - 1));

  useEffect(() => {
    // Si no hay elementos o solo hay uno, no hay carrusel automático
    if (imgArray.length <= 1) return;

    let timeoutId;
    const currentMedia = imgArray[currentIndex];

    // Solo usamos el temporizador si ES UNA IMAGEN (4 segundos)
    if (!isVideo(currentMedia)) {
      timeoutId = setTimeout(() => {
        nextSlide();
      }, 4000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, imgArray]);

  if (imgArray.length === 0) return null;

  const currentMedia = imgArray[currentIndex];
  const isVid = isVideo(currentMedia);

  return (
    <div className="v2-project-slider">
      {/* Renderizado condicional: Video o Imagen */}
      {isVid ? (
        <video
          key={currentMedia} 
          src={currentMedia}
          className="v2-slide-media"
          autoPlay
          muted 
          playsInline
          onEnded={nextSlide} 
        />
      ) : (
        <img
          key={currentMedia}
          src={currentMedia}
          alt={`${title} - slide ${currentIndex + 1}`}
          className="v2-slide-media"
        />
      )}
      
      {/* Controles de navegación */}
      {imgArray.length > 1 && (
        <>
          <button className="v2-slider-btn prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="v2-slider-btn next" onClick={nextSlide}>
            &#10095;
          </button>
          <div className="v2-slider-dots">
            {imgArray.map((_, idx) => (
              <span
                key={idx}
                className={`v2-slider-dot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function ProjectsV2({ t }) {
  const projectsList = projects || [];

  return (
    <section id="projects" className="v2-projects">

      <div className="area" aria-hidden="true">
        <ul className="circles">
          <li></li><li></li><li></li><li></li><li></li>
          <li></li><li></li><li></li><li></li><li></li>
        </ul>
      </div>
    
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="v2-section-head">
          <h2>{t.projects.title}</h2>
          <span className="v2-rule" />
        </div>

        <div className="v2-projects-list">
          {projectsList.map((project, index) => (
            <div key={index} className="v2-project-card">
              
              <div className="v2-project-img">
                <ProjectSlider 
                  images={project.images} 
                  singleImg={project.img} 
                  title={project.title} 
                />
              </div>

              <div className="v2-project-info">
                <h3>{project.title}</h3>
                
                {/* --- ESTA ES LA LÍNEA MÁGICA REPARADA --- */}
                {/* Ahora lee del diccionario usando el ID del proyecto */}
                <p className="v2-project-desc">{t.projectDetails[project.id]}</p>
                
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
                  {project.google && (
                    <a className="v2-btn v2-btn-sm" href={project.google} target="_blank" rel="noreferrer">
                      <AndroidIcon fontSize="small" /> {t.projects.google || "Google Play"}
                    </a>
                  )}
                  {project.git && (
                    <a className="v2-btn v2-btn-sm v2-btn-outline" href={project.git} target="_blank" rel="noreferrer">
                      <GitHubIcon fontSize="small" /> {t.projects.code}
                    </a>
                  )}
                  {project.youtube && (
                    <a className="v2-btn v2-btn-sm" href={project.youtube} target="_blank" rel="noreferrer">
                      <YouTubeIcon fontSize="small" /> {t.projects.youtube || "YouTube"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}