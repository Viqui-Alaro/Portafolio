import React from "react";
import { SocialIcon } from "react-social-icons";

export default function HeroV2({ t, lang }) {
  return (
    <section id="top" className="v2-hero">
      <div className="v2-hero-bg" aria-hidden="true" />
      <div className="v2-hero-social">
        <SocialIcon url="https://github.com/Viqui-Alaro" network="github" style={{ width: 34, height: 34 }} />
        <SocialIcon url="https://www.linkedin.com/in/viqui-alaro-mamani-b9b912137" network="linkedin" style={{ width: 34, height: 34 }} />
        <span className="v2-hero-social-line" />
      </div>

      <div className="v2-hero-content">
        <p className="v2-hero-greeting">{t.hero.greeting}</p>
        <h1 className="v2-hero-name">{t.hero.name}</h1>
        <h2 className="v2-hero-role">{t.hero.role}</h2>

        {lang === "es" ? (
          <p className="v2-hero-bio">
            Desarrollador full-stack con experiencia en{" "}
            <span className="v2-accent">Kotlin</span>, Java (Spring Boot),
            Node.js, Angular y React, construcción de{" "}
            <span className="v2-accent">aplicaciones escalables</span> con{" "}
            <span className="v2-accent">Arquitectura Onion</span> y
            Microservicios, y enfoque en calidad de código, UI/UX y despliegue
            con Docker.
          </p>
        ) : (
          <p className="v2-hero-bio">{t.hero.bio}</p>
        )}

        <a href="#about" className="v2-btn">
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}
