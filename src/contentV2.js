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
      p1: "Me define la curiosidad técnica y la constante búsqueda de innovación. Disfruto colaborar en equipos multidisciplinarios, aportar una visión arquitectónica sólida y transformar ideas complejas en productos digitales de alto valor.",
      p2: "Mi experiencia abarca el desarrollo de software y la integración de tecnologías modernas:",
      cv: "Curriculum",
      spin: "Frontend * Backend * Software * Engineer * ",
    },
    projects: {
      title: "02. Mis proyectos",
      demo: "Demo",
      code: "Código",
      google: "Google Play",
      youtube: "Ver Video",
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
      google: "Google Play",
      youtube: "Ver Video",
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
    title: "SIAT en tus Manos",
    descripcion:
      "Aplicación móvil integral diseñada para facilitar la gestión, control y emisión de facturación electrónica en Bolivia (ecosistema SIAT). La herramienta centraliza procesos tributarios complejos en una interfaz intuitiva, adaptándose a diversos perfiles de usuario y garantizando el acceso rápido a la información fiscal desde cualquier lugar.",
    img: require("./componentes/images/proyectos/obi.png"),
    
    img: require("./componentes/images/proyectos/siatUno.png"),
    images: [
      require("./componentes/images/proyectos/siatUno.png"),
      process.env.PUBLIC_URL + "/videos/SIATMobile.mp4", // <-- VIDEO: Guardado en public/videos/demo-siat.mp4
      require("./componentes/images/proyectos/siatDos.png"),
      require("./componentes/images/proyectos/siatTres.png"),
      require("./componentes/images/proyectos/siatCuatro.png") // Imagen 2
    ],
    tags: ["Kotlin", "Jetpack Compose", "Coroutines + Flow", "Clean Architecture", "JAVA"],
    google: "https://play.google.com/store/apps/details?id=bo.gob.sin.mobile.administraciontributaria",
    youtube: "https://www.youtube.com/watch?v=enPP66m77n4&t=1s",
  },
  {
    title: "Portafolio",
    descripcion:
      "Mi portafolio personal, desarrollado con React y publicado con GitHub Pages.",
    img: require("./componentes/images/proyectos/portafolioDos.png"),
    tags: ["React.js", "GitHub Pages"],
    demo: "https://vicovillca.github.io/portafolio/",
    git: "https://github.com/Viqui-Alaro/Portafolio",
  },
  {
    title: "Facturador Móvil - Farmacias",
    descripcion:
      "Siat Farmacias es la herramienta móvil definitiva diseñada específicamente para optimizar, digitalizar y agilizar el proceso de venta en farmacias, cumpliendo al 100% con las normativas de facturación electrónica en línea del SIAT (Servicio de Impuestos Nacionales).",
    img: require("./componentes/images/proyectos/farmaciaUno.png"),
    images: [
      require("./componentes/images/proyectos/farmaciaUno.png"),
      process.env.PUBLIC_URL + "/videos/FacturadorFarmacias.mp4", // <-- VIDEO: Guardado en public/videos/demo-siat.mp4
      require("./componentes/images/proyectos/farmaciaDos.png"),
      require("./componentes/images/proyectos/farmaciaTres.png") // Imagen 2
    ],
    tags: ["Kotlin", "Jetpack Compose", "Coroutines + Flow", "Clean Architecture", "JAVA"],
    google: "https://play.google.com/store/apps/details?id=bo.com.sin.mobile.administraciontributariafarmacia"
  },
  {
    title: "Facturador Móvil - Transporte",
    descripcion: "La solución ideal para la facturación electrónica en transporte. Permite emitir facturas de forma rápida y segura, cumpliendo con la normativa vigente. Los usuarios pueden registrar pasajeros, seleccionar rutas y calcular montos automáticamente. La app valida la información en tiempo real, evitando errores y garantizando precisión..",
     img: require("./componentes/images/proyectos/transporteUno.png"),
    images: [
      require("./componentes/images/proyectos/transporteUno.png"),
      process.env.PUBLIC_URL + "/videos/emision.mp4", // <-- VIDEO: Guardado en public/videos/demo-siat.mp4
      require("./componentes/images/proyectos/transporteDos.png"),
      process.env.PUBLIC_URL + "/videos/planilla_pasajeros.mp4" 
   
    ],
     tags: ["Kotlin", "Jetpack Compose", "Coroutines + Flow", "Clean Architecture", "JAVA"],
    google: "https://play.google.com/store/apps/details?id=bo.gob.sin.mobile.administraciontributariatransporte",
  },
  {
    title: "Fiabilidad-SIAT",
    descripcion: "Solución móvil de verificación en campo que optimiza los procesos de auditoría y fiscalización tributaria. La herramienta permite a los inspectores certificar la existencia física de los establecimientos, mapear coordenadas de domicilio mediante georreferenciación y auditar actividades económicas de forma ágil y segura. Transforma inspecciones complejas de papel a un flujo digital 100% auditable y preciso.",
    img: require("./componentes/images/proyectos/fiabilidadUno.png"),
    images: [
      require("./componentes/images/proyectos/fiabilidadUno.png"),
      process.env.PUBLIC_URL + "/videos/Fiabilidad.mp4", // <-- VIDEO: Guardado en public/videos/demo-siat.mp4
      require("./componentes/images/proyectos/fiabilidadDos.png") 
   
    ],
    tags: ["Kotlin", "Jetpack Compose", "Coroutines + Flow", "Clean Architecture", "JAVA"],
    youtube: "https://www.youtube.com/watch?v=JwJsV3sdfkU&t=673s",
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
