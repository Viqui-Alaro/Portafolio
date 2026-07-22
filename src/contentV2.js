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
    projectDetails: {
      siat: "Aplicación móvil integral diseñada para facilitar la gestión, control y emisión de facturación electrónica en Bolivia (ecosistema SIAT). La herramienta centraliza procesos tributarios complejos en una interfaz intuitiva, adaptándose a diversos perfiles de usuario y garantizando el acceso rápido a la información fiscal desde cualquier lugar.",
      portafolio: "Mi portafolio personal, desarrollado con React y publicado con GitHub Pages.",
      farmacias: "Siat Farmacias es la herramienta móvil definitiva diseñada específicamente para optimizar, digitalizar y agilizar el proceso de venta en farmacias, cumpliendo al 100% con las normativas de facturación electrónica en línea del SIAT (Servicio de Impuestos Nacionales).",
      transporte: "La solución ideal para la facturación electrónica en transporte. Permite emitir facturas de forma rápida y segura, cumpliendo con la normativa vigente. Los usuarios pueden registrar pasajeros, seleccionar rutas y calcular montos automáticamente. La app valida la información en tiempo real, evitando errores y garantizando precisión.",
      fiabilidad: "Solución móvil de verificación en campo que optimiza los procesos de auditoría y fiscalización tributaria. La herramienta permite a los inspectores certificar la existencia física de los establecimientos, mapear coordenadas de domicilio mediante georreferenciación y auditar actividades económicas de forma ágil y segura. Transforma inspecciones complejas de papel a un flujo digital 100% auditable y preciso."
    },
    contact: {
      title: "03. Hablemos",
      subtitle: "¿Tenés un proyecto en mente o querés sumar mis habilidades a tu equipo?",
      p1: "Estoy siempre interesado en nuevos desafíos tecnológicos, proyectos Full-Stack, APIs complejas o integraciones a gran escala. No dudes en escribirme.",
      label_email: "EMAIL",
      value_email: "viquialaro241@gmail.com",
      label_phone: "TELÉFONO",
      value_phone: "+591 77758547",
      label_name: "Nombre Completo *",
      placeholder_name: "Tu nombre",
      label_email_form: "Correo Electrónico *",
      placeholder_email: "tu@correo.com",
      label_message: "Mensaje *",
      placeholder_message: "Contanos tu idea o consulta...",
      cta: "Enviar Mensaje",
      success: "¡Mensaje enviado con éxito! Te responderé pronto.",
      error: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
    }
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
      youtube: "Watch Video",
    },
    projectDetails: {
      siat: "Comprehensive mobile application designed to facilitate the management, control, and issuance of electronic billing in Bolivia (SIAT ecosystem). The tool centralizes complex tax processes into an intuitive interface, adapting to various user profiles and ensuring quick access to tax information from anywhere.",
      portafolio: "My personal portfolio, developed with React and published on GitHub Pages.",
      farmacias: "Siat Farmacias is the ultimate mobile tool specifically designed to optimize, digitize, and streamline the sales process in pharmacies, 100% compliant with SIAT's online electronic billing regulations.",
      transporte: "The ideal solution for electronic billing in transportation. It allows issuing invoices quickly and securely, complying with current regulations. Users can register passengers, select routes, and calculate amounts automatically. The app validates information in real-time, preventing errors and ensuring accuracy.",
      fiabilidad: "Mobile field verification solution that optimizes tax audit and inspection processes. The tool allows inspectors to certify the physical existence of establishments, map domicile coordinates via georeferencing, and audit economic activities securely and agilely. It transforms complex paper inspections into a 100% auditable and accurate digital flow."
    },
    contact: {
      title: "03. Let's talk",
      subtitle: "Do you have a project in mind or want to add my skills to your team?",
      p1: "I'm always interested in new technological challenges, Full-Stack projects, complex APIs, or large-scale integrations. Don't hesitate to write to me.",
      label_email: "EMAIL",
      value_email: "viquialaro241@gmail.com",
      label_phone: "PHONE",
      value_phone: "+591 77758547",
      label_name: "Full Name *",
      placeholder_name: "Your name",
      label_email_form: "Email *",
      placeholder_email: "you@correo.com",
      label_message: "Message *",
      placeholder_message: "Tell us your idea or question...",
      cta: "Send Message",
      success: "Message sent successfully! I will reply soon.",
      error: "There was an error sending the message. Please try again.",
    }
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
  { label: "Udemy", sub: { es: "Varios cursos", en: "Various courses" } },
];

export const projects = [
  {
    id: "siat",
    title: "SIAT en tus Manos",
    img: require("./componentes/images/proyectos/siatUno.png"),
    images: [
      require("./componentes/images/proyectos/siatUno.png"),
      process.env.PUBLIC_URL + "/videos/SIATMobile.mp4",
      require("./componentes/images/proyectos/siatDos.png"),
      require("./componentes/images/proyectos/siatTres.png"),
      require("./componentes/images/proyectos/siatCuatro.png")
    ],
    tags: ["Kotlin", "Jetpack Compose", "Coroutines + Flow", "Clean Architecture", "JAVA", "HILT","FIREBASE"],
    google: "https://play.google.com/store/apps/details?id=bo.gob.sin.mobile.administraciontributaria",
    youtube: "https://www.youtube.com/watch?v=enPP66m77n4&t=1s",
  },
  {
    id: "portafolio",
    title: "Portafolio",
    img: require("./componentes/images/proyectos/portafolioDos.png"),
    tags: ["Bootstrap", "GitHub Pages","Angular","Lottie","CSS3","HTML5","TypeScrip"],
    demo: "https://viqui-alaro.github.io/Portafolio/",
    git: "https://github.com/Viqui-Alaro/Portafolio",
  },
  {
    id: "farmacias",
    title: "Facturador Móvil - Farmacias",
    img: require("./componentes/images/proyectos/farmaciaUno.png"),
    images: [
      require("./componentes/images/proyectos/farmaciaUno.png"),
      process.env.PUBLIC_URL + "/videos/FacturadorFarmacias.mp4",
      require("./componentes/images/proyectos/farmaciaDos.png"),
      require("./componentes/images/proyectos/farmaciaTres.png")
    ],
    tags: ["Kotlin", "Jetpack Compose", "Coroutines + Flow", "Clean Architecture", "JAVA","HILT","ONION ARQUITECTURE", "REST APIS", "APACHE MAVEN","POSTGRESQL"],
    google: "https://play.google.com/store/apps/details?id=bo.com.sin.mobile.administraciontributariafarmacia"
  },
  {
    id: "transporte",
    title: "Facturador Móvil - Transporte",
    img: require("./componentes/images/proyectos/transporteUno.png"),
    images: [
      require("./componentes/images/proyectos/transporteUno.png"),
      process.env.PUBLIC_URL + "/videos/emision.mp4",
      require("./componentes/images/proyectos/transporteDos.png"),
      process.env.PUBLIC_URL + "/videos/planilla_pasajeros.mp4"
    ],
    tags: ["Kotlin", "Jetpack Compose", "Coroutines + Flow", "Clean Architecture", "JAVA","HILT","ONION ARQUITECTURE", "REST APIS", "APACHE MAVEN","POSTGRESQL"],
    google: "https://play.google.com/store/apps/details?id=bo.gob.sin.mobile.administraciontributariatransporte",
  },
  {
    id: "fiabilidad",
    title: "Fiabilidad-SIAT",
    img: require("./componentes/images/proyectos/fiabilidadUno.png"),
    images: [
      require("./componentes/images/proyectos/fiabilidadUno.png"),
      process.env.PUBLIC_URL + "/videos/Fiabilidad.mp4",
      require("./componentes/images/proyectos/fiabilidadDos.png")
    ],
    tags: ["Kotlin", "Jetpack Compose", "Coroutines + Flow", "Clean Architecture", "JAVA"],
    youtube: "https://www.youtube.com/watch?v=JwJsV3sdfkU&t=673s",
  }
];