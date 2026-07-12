// Contenido y traducciones del portafolio.
// EDITA AQUÍ: textos, proyectos, skills y certificaciones.
// Todo lo demás (componentes) simplemente lee de este archivo.

export const translations = {
  es: {
    nav: { about: "01. Acerca de mí", projects: "02. Proyectos" },
    hero: {
      greeting: "Hola! Mi nombre es",
      name: "Viqui Alaro.",
      role: "Full-Stack Developer",
      bio: "Desarrollador full-stack con experiencia en Kotlin, Java (Spring Boot), Node.js, Angular y React, construcción de aplicaciones escalables con Arquitectura Onion y Microservicios, y enfoque en calidad de código, UI/UX y despliegue con Docker.",
      cta: "Salúdame",
    },
    about: {
      title: "01. Acerca de mí",
      p1: "Me considero una persona curiosa y cooperativa. Me encanta aportar mis conocimientos para crear soluciones innovadoras que resuelvan problemas reales y agreguen valor.",
      p2: "A lo largo de mi carrera, he tenido la oportunidad de trabajar con diversas tecnologías modernas:",
      cv: "Curriculum",
      spin: "Frontend * Backend * Software * Engineer * ",
    },
    projects: {
      title: "02. Mis proyectos",
      demo: "Demo",
      code: "Código",
    },
  },
  en: {
    nav: { about: "01. About me", projects: "02. Projects" },
    hero: {
      greeting: "Hi! My name is",
      name: "Viqui Alaro.",
      role: "Full-Stack Developer",
      bio: "Full-stack developer experienced in Kotlin, Java (Spring Boot), Node.js, Angular and React, building scalable applications with Onion Architecture and Microservices, focused on code quality, UI/UX and deployment with Docker.",
      cta: "Say hi",
    },
    about: {
      title: "01. About me",
      p1: "I consider myself a curious and cooperative person. I love contributing my knowledge to create innovative solutions that solve real problems and add value.",
      p2: "Throughout my career, I've had the opportunity to work with a variety of modern technologies:",
      cv: "Resume",
      spin: "Frontend * Backend * Software * Engineer * ",
    },
    projects: {
      title: "02. My projects",
      demo: "Demo",
      code: "Code",
    },
  },
};

export const skillGroups = [
  {
    key: "arquitectura",
    label: { es: "Arquitectura", en: "Architecture" },
    items: [
      "Onion",
      "Microfrontends",
      "Microservicios",
      "API Gateway",
      "Service Discovery (Eureka)",
      "Arquitectura orientada a eventos (Kafka)",
    ],
  },
  {
    key: "backend",
    label: { es: "Backend", en: "Backend" },
    items: ["Java (Spring Boot, Hibernate)", "Node.js (Express, NestJs)", "PHP"],
  },
  {
    key: "frontend",
    label: { es: "Frontend", en: "Frontend" },
    items: [
      "Angular (Module Federation, PrimeNG)",
      "React (Hooks, Redux)",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    key: "movil",
    label: { es: "Móvil / Multiplataforma", en: "Mobile / Cross-platform" },
    items: ["Kotlin (Android)", "Flutter", "Java (Android)"],
  },
  {
    key: "datos",
    label: { es: "Bases de Datos", en: "Databases" },
    items: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQL Server", "Firebase"],
  },
];

export const certifications = [
  { label: "SCRUMstudy", sub: "SFC" },
  { label: "FreeCodeCamp", sub: "JS Algorithms" },
  { label: "Udemy", sub: "Varios cursos" },
];

export const projects = [
  {
    title: "ObiAdmin",
    descripcion:
      "Sistema integral de gestión educativa para seguimiento de tutores, coordinadores y estudiantes. Arquitectura full-stack con autenticación JWT, despliegue en contenedores Docker y base de datos PostgreSQL.",
    img: require("./componentes/images/proyectos/obi.png"),
    tags: ["React.js", "NodeJS", "ExpressJS", "Docker", "JWT", "PostgreSQL", "MUI", "Axios", "Vercel", "Heroku"],
    demo: "https://obi-font-end.vercel.app/",
    git: "https://github.com/VicoVillca/Obi-FontEnd",
  },
  {
    title: "Portafolio",
    descripcion:
      "Mi portafolio personal, desarrollado con React y publicado con GitHub Pages.",
    img: require("./componentes/images/proyectos/portafolio.png"),
    tags: ["React.js", "GitHub Pages"],
    demo: "https://vicovillca.github.io/portafolio/",
    git: "https://github.com/VicoVillca/portafolio",
  },
  {
    title: "GoldPrice",
    descripcion:
      "Herramienta para calcular el precio del oro para la compra según la onza troy.",
    img: require("./componentes/images/proyectos/goldprice.png"),
    tags: ["JavaScript", "HTML5", "CSS3"],
    demo: "https://vicovillca.github.io/GoldPrice",
    git: "https://github.com/VicoVillca/Obi-FontEnd",
  },
  {
    title: "BuscaMinas",
    descripcion: "Juego clásico de buscaminas desarrollado con React.js.",
    img: require("./componentes/images/proyectos/buscaminas.png"),
    tags: ["React.js"],
    demo: "https://vicovillca.github.io/BuscaMinas/",
    git: "https://github.com/VicoVillca/BuscaMinas",
  },
  {
    title: "Restricción vehicular",
    descripcion: "Consulta de restricciones vehiculares de la alcaldía municipal de La Paz.",
    img: require("./componentes/images/proyectos/restriccion.png"),
    tags: ["React.js"],
    demo: "https://vicovillca.github.io/restriccion-vehicular-lapaz/",
    git: "https://github.com/VicoVillca/restriccion-vehicular-lapaz",
  },
  {
    title: "Travel La Paz",
    descripcion: "Aplicación móvil desarrollada en la DTIGA-GAMLP para promover el turismo.",
    img: require("./componentes/images/proyectos/app-turismo.png"),
    tags: ["Android", "Java"],
    demo: "https://play.google.com/store/apps/details?id=com.gamlp.turismotravel&hl=es&gl=US",
    git: "",
  },
];
