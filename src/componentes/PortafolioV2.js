import React, { useState } from "react";
import NavbarV2 from "./v2/NavbarV2";
import HeroV2 from "./v2/HeroV2";
import AboutV2 from "./v2/AboutV2";
import ProjectsV2 from "./v2/ProjectsV2";
import Footer from "./Footer";
import { translations } from "../contentV2";
import "../portafolio-v2.css";

export default function PortafolioV2() {
  const [lang, setLang] = useState("es");
  const t = translations[lang];

  return (
    <div className="v2-root">
      <NavbarV2 lang={lang} setLang={setLang} t={t} />
      <HeroV2 t={t} lang={lang} />
      <AboutV2 t={t} lang={lang} />
      <ProjectsV2 t={t} />
      <Footer />
    </div>
  );
}
