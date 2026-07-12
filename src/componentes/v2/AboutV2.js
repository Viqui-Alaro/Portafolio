import React from "react";
import SpinningText from "../SpinningText";
import GotMilk from "../images/foto.png";
import curriculum from "../CV - ALARO MAMANI VIQUI MARIBEL.pdf";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { skillGroups, certifications } from "../../contentV2";

export default function AboutV2({ t, lang }) {
  const onDownloadCV = () => {
    fetch(curriculum).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "curriculum viqui alaro.pdf";
        alink.click();
      });
    });
  };

  return (
    <section id="about" className="v2-about">
      <div className="v2-about-bg" aria-hidden="true" />
      <div className="v2-section-head">
        <h2>{t.about.title}</h2>
        <span className="v2-rule" />
      </div>

      <div className="v2-about-grid">
        <div className="v2-about-left">
          <SpinningText text={t.about.spin}>
            <img src={GotMilk} alt="Foto de perfil de Viqui Alaro" />
          </SpinningText>

          <button className="v2-btn v2-btn-sm" onClick={onDownloadCV}>
            ⬇ {t.about.cv}
          </button>

          <div className="v2-badges">
            {certifications.map((c) => (
              <div className="v2-badge" key={c.label}>
                <WorkspacePremiumIcon fontSize="large" />
                <span>{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="v2-about-right">
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>

          {skillGroups.map((group) => (
            <div className="v2-skill-group" key={group.key}>
              <h3>{group.label[lang]}</h3>
              <div className="v2-chips">
                {group.items.map((item) => (
                  <span className="v2-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
