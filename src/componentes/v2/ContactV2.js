import React, { useState, useEffect, useRef } from "react";
import { SocialIcon } from "react-social-icons";
import emailjs from "@emailjs/browser"; // Asegúrate de tener esto importado

// --- 1. COMPONENTE DE CARGA (Preloader) ---
const Preloader = ({ isFading }) => {
  const loadingText = "LOADING...".split("");

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      backgroundColor: "#0a192f", display: "flex", justifyContent: "center",
      alignItems: "center", zIndex: 99999, opacity: isFading ? 0 : 1,
      transition: "opacity 0.8s ease-in-out", pointerEvents: isFading ? "none" : "all",
      overflow: "hidden" 
    }}>
      <div className="squares-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="floating-square" style={{
            left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s`, 
            animationDuration: `${5 + Math.random() * 5}s`, width: `${20 + Math.random() * 40}px`, 
            height: `${20 + Math.random() * 40}px`
          }}></div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "4px", zIndex: 1 }}>
        {loadingText.map((char, index) => (
          <span key={index} style={{
            color: "#00f0ff", fontFamily: "monospace", fontSize: "1.5rem",
            fontWeight: "bold", textShadow: "0 0 10px rgba(0, 240, 255, 0.5)",
            opacity: 0, animation: "appearLetter 0.5s forwards", animationDelay: `${index * 0.15}s` 
          }}>{char}</span>
        ))}
      </div>
      <style>{`
        @keyframes appearLetter { 0% { opacity: 0; transform: translateY(20px); } 50% { opacity: 1; transform: translateY(-5px); text-shadow: 0 0 20px #00f0ff; } 100% { opacity: 1; transform: translateY(0); } }
        .floating-square { position: absolute; bottom: -100px; background: rgba(0, 240, 255, 0.05); border: 1px solid rgba(0, 240, 255, 0.2); display: block; animation: floatUp linear infinite; }
        @keyframes floatUp { 0% { transform: translateY(0) rotate(0deg); opacity: 1; border-radius: 0; } 100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; border-radius: 50%; } }
      `}</style>
    </div>
  );
};

// --- 2. Animación de escritura nativa ---
const TypewriterEffect = () => {
  const texts = ["Full-Stack Developer", "Especialista en Java & Spring Boot", "Creadora de proyectos Open Source"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = texts[index];
    let timeout;
    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentString.substring(0, text.length - 1));
        if (text === "") { setIsDeleting(false); setIndex((prev) => prev + 1); }
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
    <span style={{ color: "#90caf9", fontWeight: "bold", display: "inline-flex", alignItems: "center" }}>
      {text}
      <span style={{ borderRight: "3px solid #90caf9", height: "1.1em", animation: "blink 1s step-end infinite", marginLeft: "4px" }}></span>
      <style>{`@keyframes blink { 50% { borderColor: transparent; } }`}</style>
    </span>
  );
};

// --- 3. MODAL DE CONTACTO (Nuevo) ---
const ContactModal = ({ isOpen, onClose, t }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success" o "error"

  if (!isOpen) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // REEMPLAZA ESTAS CLAVES CON LAS TUYAS DE EMAILJS
    emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", form.current, "TU_PUBLIC_KEY")
      .then(() => {
        setStatus("success");
        setLoading(false);
        form.current.reset();
        setTimeout(onClose, 3000); // Cierra el modal automáticamente después de 3 seg
      }, () => {
        setStatus("error");
        setLoading(false);
      });
  };

  const inputStyle = {
    width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "5px",
    border: "1px solid rgba(0, 240, 255, 0.3)", backgroundColor: "rgba(10, 25, 47, 0.8)",
    color: "#e6f1ff", outline: "none", fontFamily: "inherit"
  };

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      backgroundColor: "rgba(2, 12, 27, 0.8)", backdropFilter: "blur(5px)",
      display: "flex", justifyContent: "center", alignItems: "center", zIndex: 999999
    }}>
      <div style={{
        backgroundColor: "#112240", padding: "30px", borderRadius: "10px",
        width: "90%", maxWidth: "500px", border: "1px solid #00f0ff",
        boxShadow: "0 10px 30px -10px rgba(0,240,255,0.2)", position: "relative"
      }}>
        <button onClick={onClose} style={{
          position: "absolute", top: "15px", right: "20px", background: "none",
          border: "none", color: "#00f0ff", fontSize: "1.5rem", cursor: "pointer"
        }}>✖</button>
        
        <h2 style={{ color: "#e6f1ff", marginTop: 0, marginBottom: "20px" }}>{t.contact.title}</h2>
        
        <form ref={form} onSubmit={sendEmail}>
          <label style={{ color: "#a8b2d1", fontSize: "0.9rem", display: "block", marginBottom: "5px" }}>{t.contact.label_name}</label>
          <input type="text" name="user_name" required style={inputStyle} />

          <label style={{ color: "#a8b2d1", fontSize: "0.9rem", display: "block", marginBottom: "5px" }}>{t.contact.label_email_form}</label>
          <input type="email" name="user_email" required style={inputStyle} />

          <label style={{ color: "#a8b2d1", fontSize: "0.9rem", display: "block", marginBottom: "5px" }}>{t.contact.label_message}</label>
          <textarea name="message" rows="4" required style={{...inputStyle, resize: "none"}}></textarea>

          {status === "success" && <p style={{ color: "#4caf50", fontSize: "0.9rem", margin: "0 0 10px 0" }}>{t.contact.success}</p>}
          {status === "error" && <p style={{ color: "#f44336", fontSize: "0.9rem", margin: "0 0 10px 0" }}>{t.contact.error}</p>}

          <button type="submit" disabled={loading} style={{
            width: "100%", padding: "12px", borderRadius: "5px", border: "1px solid #00f0ff",
            backgroundColor: loading ? "transparent" : "#00f0ff",
            color: loading ? "#00f0ff" : "#0a192f",
            fontWeight: "bold", cursor: "pointer", transition: "all 0.3s ease"
          }}>
            {loading ? "Enviando..." : t.contact.cta}
          </button>
        </form>
      </div>
    </div>
  );
};

// --- 4. COMPONENTE PRINCIPAL ---
export default function HeroV2({ t, lang }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [step, setStep] = useState(0);
  
  // ESTADO PARA CONTROLAR EL MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setIsFading(true), 2500);
    const timer2 = setTimeout(() => setIsLoading(false), 3300);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  useEffect(() => {
    if (isLoading) return; 
    const t1 = setTimeout(() => setStep(1), 300);
    const t2 = setTimeout(() => setStep(2), 1000);
    const t3 = setTimeout(() => setStep(3), 1800);
    const t4 = setTimeout(() => setStep(4), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [isLoading]);

  const fadeStyle = (stepLevel) => ({
    opacity: step >= stepLevel ? 1 : 0, transform: step >= stepLevel ? "translateY(0)" : "translateY(15px)",
    transition: "opacity 0.8s ease, transform 0.8s ease", width: "100%"
  });

  return (
    <>
      {isLoading && <Preloader isFading={isFading} />}
      
      {/* RENDERIZAMOS EL MODAL AQUÍ (Solo se muestra si isModalOpen es true) */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} t={t} />

      <section id="top" className="v2-hero" style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "center" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
          <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }} src={process.env.PUBLIC_URL + "/videos/background.mp4"} />
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(10, 15, 25, 0.8)" }} />
        </div>

        <div style={{ position: "fixed", bottom: "0", left: "40px", zIndex: 999, opacity: step >= 4 ? 1 : 0, transition: "opacity 1s ease", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          <SocialIcon url="https://github.com/Viqui-Alaro" network="github" style={{ width: 34, height: 34 }} />
          <SocialIcon url="https://www.linkedin.com/in/viqui-alaro-mamani-b9b912137" network="linkedin" style={{ width: 34, height: 34 }} />
          <SocialIcon url="https://wa.me/59177758547" network="whatsapp" style={{ width: 34, height: 34 }} target="_blank" rel="noopener noreferrer" />
          <span style={{ width: "2px", height: "90px", backgroundColor: "#8892b0" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, width: "100%", padding: "0 20px" }}>
          <div className="v2-hero-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", margin: "0 auto", maxWidth: "800px" }}>
            <div style={fadeStyle(1)}><p className="v2-hero-greeting" style={{ marginBottom: "1rem", color: "#90caf9" }}>{t.hero.greeting}</p></div>
            <div style={fadeStyle(2)}><h1 className="v2-hero-name" style={{ fontSize: "clamp(40px, 6vw, 70px)", margin: "0", lineHeight: "1.1" }}>{t.hero.name}</h1></div>
            <div style={fadeStyle(3)}><h2 className="v2-hero-role" style={{ fontSize: "clamp(20px, 3vw, 35px)", margin: "1.5rem 0", minHeight: "50px", display: "flex", justifyContent: "center" }}>{step >= 3 && <TypewriterEffect />}</h2></div>
            
            <div style={fadeStyle(4)}>
              {lang === "es" ? (
                <p className="v2-hero-bio" style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#a8b2d1", maxWidth: "700px", margin: "0 auto" }}>
                  Desarrollador full-stack con experiencia en <span style={{ color: "#90caf9" }}>Kotlin</span>, Java (Spring Boot), Node.js, Angular y React, construcción de <span style={{ color: "#90caf9" }}>aplicaciones escalables</span> con <span style={{ color: "#90caf9" }}>Arquitectura Onion</span> y Microservicios, y enfoque en calidad de código, UI/UX y despliegue con Docker.
                </p>
              ) : (
                <p className="v2-hero-bio" style={{ fontSize: "1.1rem", lineHeight: "1.6", color: "#a8b2d1", maxWidth: "700px", margin: "0 auto" }}>
                  Full-stack developer experienced in <span style={{ color: "#90caf9" }}>Kotlin</span>, Java (Spring Boot), Node.js, Angular and React, building <span style={{ color: "#90caf9" }}>scalable applications</span> with <span style={{ color: "#90caf9" }}>Onion Architecture</span> and Microservices, focused on code quality, UI/UX and deployment with Docker.
                </p>
              )}

              {/* EL BOTÓN AHORA ABRE EL MODAL EN LUGAR DE HACER SCROLL */}
              <button 
                onClick={() => setIsModalOpen(true)} 
                className="v2-btn" 
                style={{ marginTop: "2rem", display: "inline-block", cursor: "pointer" }}
              >
                {t.hero.cta}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}