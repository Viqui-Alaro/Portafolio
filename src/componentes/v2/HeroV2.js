import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";

// --- Animación de escritura nativa ---
const TypewriterEffect = () => {
  const texts = [
    "Full-Stack Developer",
    "Frontend",
    "Backend"
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = texts[index];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentString.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
        }
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setText(currentString.substring(0, text.length + 1));
        if (text === currentString) {
          if (index === texts.length - 1) return; 
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        }
      }, 70);
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts]);

  return (
    <span style={{ 
      color: "#90caf9", 
      fontWeight: "bold", 
      display: "inline-flex", 
      alignItems: "center" 
    }}>
      {text}
      <span style={{ 
        borderRight: "3px solid #90caf9", 
        height: "1.1em", 
        animation: "blink 1s step-end infinite", 
        marginLeft: "4px" 
      }}></span>
      <style>{`@keyframes blink { 50% { borderColor: transparent; } }`}</style>
    </span>
  );
};

export default function HeroV2({ t, lang }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 300);
    const t2 = setTimeout(() => setStep(2), 1000);
    const t3 = setTimeout(() => setStep(3), 1800);
    const t4 = setTimeout(() => setStep(4), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  // Animación completa (para el texto)
  const fadeStyle = (stepLevel) => ({
    opacity: step >= stepLevel ? 1 : 0,
    transform: step >= stepLevel ? "translateY(0)" : "translateY(15px)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
    width: "100%"
  });

  return (
    <section id="top" className="v2-hero" style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
      
      {/* --- FONDO DE VIDEO --- */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={process.env.PUBLIC_URL + "/videos/background.mp4"} 
        />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(10, 15, 25, 0.8)" }} />
      </div>

      {/* --- BARRA LATERAL IZQUIERDA (Redes Sociales) CORREGIDA --- */}
      {/* Usamos estilos en línea puros y evitamos el 'transform' para que no se rompa el fixed */}
      <div 
        style={{ 
          position: "fixed", 
          bottom: "0", 
          left: "40px", /* Esto lo pega estrictamente a la izquierda */
          zIndex: 999, /* Asegura que siempre flote sobre el texto de abajo */
          opacity: step >= 4 ? 1 : 0, /* Animamos solo la opacidad */
          transition: "opacity 1s ease",
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: "20px"
        }}
      >
        <SocialIcon url="https://github.com/Viqui-Alaro" network="github" style={{ width: 34, height: 34 }} />
        <SocialIcon url="https://www.linkedin.com/in/viqui-alaro-mamani-b9b912137" network="linkedin" style={{ width: 34, height: 34 }} />
        <span style={{ width: "2px", height: "90px", backgroundColor: "#8892b0" }} />
      </div>

      {/* --- CONTENIDO CENTRAL --- */}
      <div style={{ position: "relative", zIndex: 1, width: "100%", padding: "0 20px" }}>
        <div 
          className="v2-hero-content" 
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", margin: "0 auto", maxWidth: "800px" }}
        >
          
          <div style={fadeStyle(1)}>
            <p className="v2-hero-greeting" style={{ marginBottom: "1rem", color: "#90caf9" }}>{t.hero.greeting}</p>
          </div>

          <div style={fadeStyle(2)}>
            <h1 className="v2-hero-name" style={{ fontSize: "clamp(40px, 6vw, 70px)", margin: "0", lineHeight: "1.1" }}>{t.hero.name}</h1>
          </div>
          
          <div style={fadeStyle(3)}>
            <h2 className="v2-hero-role" style={{ fontSize: "clamp(20px, 3vw, 35px)", margin: "1.5rem 0", minHeight: "50px", display: "flex", justifyContent: "center" }}>
              {step >= 3 && <TypewriterEffect />}
            </h2>
          </div>

          <div style={fadeStyle(4)}>
            {lang === "es" ? (
              <p className="v2-hero-bio" style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#a8b2d1", maxWidth: "700px", margin: "0 auto" }}>
                Desarrollador full-stack con experiencia en{" "}
                <span className="v2-accent" style={{ color: "#90caf9" }}>Kotlin</span>, Java (Spring Boot),
                Node.js, Angular y React, construcción de{" "}
                <span className="v2-accent" style={{ color: "#90caf9" }}>aplicaciones escalables</span> con{" "}
                <span className="v2-accent" style={{ color: "#90caf9" }}>Arquitectura Onion</span> y
                Microservicios, y enfoque en calidad de código, UI/UX y despliegue
                con Docker.
              </p>
            ) : (
              <p className="v2-hero-bio">{t.hero.bio}</p>
            )}

            <a href="#about" className="v2-btn" style={{ marginTop: "2rem", display: "inline-block" }}>
              {t.hero.cta}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}