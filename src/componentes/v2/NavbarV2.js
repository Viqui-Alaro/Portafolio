import React from "react";

export default function NavbarV2({ lang, setLang, t }) {
  return (
    <header className="v2-nav">
      <div className="v2-nav-inner">
        <a href="#top" className="v2-logo">
          {"</>"}
        </a>
        <nav className="v2-nav-links">
          <a href="#about">{t.nav.about}</a>
          <a href="#projects">{t.nav.projects}</a>
          <button
            className="v2-lang"
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label="Cambiar idioma"
          >
            {lang === "es" ? "🇪🇸 Español" : "🇺🇸 English"}
          </button>
        </nav>
      </div>
    </header>
  );
}
