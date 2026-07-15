import React from "react";

export default function NavbarV2({ lang, setLang, t }) {
  return (
    <header 
      className="v2-nav"
      style={{
        position: "fixed", /* 1. ESTA ES LA MAGIA: Fija la barra en la pantalla */
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 99999, /* 2. Asegura que la barra pase por encima de las imágenes y videos de los proyectos */
        backgroundColor: "rgba(10, 25, 47, 0.95)", /* 3. Fondo oscuro casi sólido para que el texto sea legible al hacer scroll */
        backdropFilter: "blur(8px)", /* Efecto cristalino moderno */
        padding: "15px 0", /* Asegura que tenga buen grosor */
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)" /* Sombrita elegante para separarla del contenido */
      }}
    >
      <div 
        className="v2-nav-inner" 
        style={{
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          maxWidth: "1100px", 
          margin: "0 auto",
          padding: "0 20px"
        }}
      >
        <a href="#top" className="v2-logo" style={{ textDecoration: "none", fontSize: "1.5rem", fontWeight: "bold", color: "#00f0ff" }}>
          {"</>"}
        </a>
        
        <nav className="v2-nav-links" style={{ display: "flex", gap: "25px", alignItems: "center" }}>
          <a href="#about" style={{ textDecoration: "none", color: "#e6f1ff", fontWeight: "500" }}>
            {t.nav.about}
          </a>
          <a href="#projects" style={{ textDecoration: "none", color: "#e6f1ff", fontWeight: "500" }}>
            {t.nav.projects}
          </a>
          
          <button
            className="v2-lang"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label="Cambiar idioma"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #00f0ff",
              color: "#00f0ff",
              padding: "6px 12px",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "all 0.3s ease"
            }}
          >
            {lang === "es" ? "🇪🇸 Español" : "🇺🇸 English"}
          </button>
        </nav>
      </div>
    </header>
  );
}