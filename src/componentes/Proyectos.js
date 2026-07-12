import * as React from "react";
import Box from "@mui/material/Box";

//FORMULARIOS
import Grid from "@mui/material/Grid";
// componentes de card

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
//imagenes de proyectos
import portafolio from "./images/proyectos/portafolio.png";
import obi from "./images/proyectos/obi.png";
import goldprice from "./images/proyectos/goldprice.png";
import BuscaMinas from "./images/proyectos/buscaminas.png";
import Restriccion from "./images/proyectos/restriccion.png";
import Appturismo from "./images/proyectos/app-turismo.png";
import "../Cards.css";

export default function Proyectos() {
  return (
    <Box sx={{ width: '100%', height: '100%', pt: 4, pb: 2 }}>
      <h1
        style={{
          color: '#fff',
          textAlign: 'center',
          letterSpacing: '0.03em',
          marginBottom: '0.25rem',
        }}
      >
        Proyectos
      </h1>
      <p style={{ color: '#aab0d6', textAlign: 'center', marginTop: 0, marginBottom: '2rem' }}>
        Algunas cosas que he construido
      </p>
      <Grid container sx={{ pr: 2, pl: 2 }} justifyContent="center" columns={{ xs: 4, sm: 8, md: 13 }} gap={3}>
        {itemData.map((item) => (
          <Grid className="card" item xs={4} sm={8} md={4} key={item.title} sx={{
            
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}>
            <img alt="green iguana" src={item.img} />
            <div className="info">
              <h1>{item.title}</h1>
              <p>
                {item.descripcion}
              </p>

              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button onClick={() => window.open(item.demo)}>
                  <OpenInNewIcon />
                  Demo
                </Button>
                <Button onClick={() => window.open(item.git)}>
                  <GitHubIcon />
                  Codigo
                </Button>
              </ButtonGroup>
            </div>
          </Grid>
        ))}
      </Grid>
      <br/>
    </Box>
  );
}

const itemData = [
  {
    img: portafolio,
    title: "Portafolio",
    descripcion:"My portafolio desarrollado con reactjs y gitpages",
    demo: "https://vicovillca.github.io/portafolio/",
    git: "https://github.com/VicoVillca/portafolio",
  },
  {
    img: obi,
    title: "ObiAdmin",
    descripcion:"Sistema de gestionde los tutores coordinadores y estudiantes en OBI.",
    demo: "https://obi-font-end.vercel.app/",
    git: "https://github.com/VicoVillca/Obi-FontEnd",
  },
  {
    img: goldprice,
    title: "GoldPrice",
    descripcion:"herramienta para calcular el precio del oro para la compra segun la onza troy",
    demo: "https://vicovillca.github.io/GoldPrice",
    git: "https://github.com/VicoVillca/Obi-FontEnd",
  },
  {
    img: BuscaMinas,
    title: "BuscaMinas",
    descripcion:"juego clasico desarrollado con reactjs",
    demo: "https://vicovillca.github.io/BuscaMinas/",
    git: "https://github.com/VicoVillca/BuscaMinas",
  },
  {
    img: Restriccion,
    title: "Restricción vehicular",
    descripcion:"Restricciones de al alcaldia municipal de la paz",
    demo: "https://vicovillca.github.io/restriccion-vehicular-lapaz/",
    git: "https://github.com/VicoVillca/restriccion-vehicular-lapaz",
  },
  {
    img: Appturismo,
    title: "Travel La Paz.",
    descripcion:"Aplicacion moVile generado Desarrollado en la DTIGA-GAMLP",
    demo: "https://play.google.com/store/apps/details?id=com.gamlp.turismotravel&hl=es&gl=US",
    git: "",
  },  
];
