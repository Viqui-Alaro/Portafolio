import * as React from "react";
import Footer from "./Footer";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import GotMilk from "./images/foto.png";
import SpinningText from "./SpinningText";
import { SocialIcon } from "react-social-icons";
import curriculum from "../componentes/CV - ALARO MAMANI VIQUI MARIBEL.pdf";
import TypeIt from "typeit-react";

export default function Perfil() {
  const onButtonClick = () => {
    fetch(curriculum).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV - ALARO MAMANI VIQUI MARIBEL.pdf";
        alink.click();
      });
    });
  };

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", py: 5 }}>
      
      {/* --- INICIO DEL FONDO DE VIDEO --- */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src="/videos/background.mp4" 
        />
        {/* Capa superpuesta oscura para que el texto sea legible */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(10, 15, 25, 0.75)" }} />
      </div>
      {/* --- FIN DEL FONDO DE VIDEO --- */}

      {/* --- CONTENIDO PRINCIPAL --- */}
      <Grid container sx={{ position: "relative", zIndex: 1, color: "#ffffff" }}>
        <Grid item xs={12} sx={{ px: 3, textAlign: "center" }}>
          
          <Stack direction="column" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
            <SpinningText text="Frontend * Backend * Software * Engineer * ">
              <img src={GotMilk} alt="Foto de perfil de Viqui Alaro" />
            </SpinningText>
          </Stack>

          <Typography variant="subtitle2" gutterBottom sx={{ mt: 3, color: "#90caf9" }}>
            ¡Hola! 👋 Mi nombre es
          </Typography>
          
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }} gutterBottom>
            Viqui Alaro
          </Typography>

          <Typography variant="h5" sx={{ mb: 3, minHeight: "40px" }} gutterBottom>
            Soy{" "}
            <span style={{ color: "#90caf9", fontWeight: "bold" }}>
              <TypeIt
                options={{ loop: true, speed: 80, deleteSpeed: 50, lifeLike: true }}
                getBeforeInit={(instance) => {
                  instance
                    .type("Full-Stack Developer")
                    .pause(2000)
                    .delete()
                    .pause(500)
                    .type("Especialista en Java & Spring Boot")
                    .pause(2000)
                    .delete()
                    .pause(500)
                    .type("Creadora de proyectos Open Source");
                  return instance;
                }}
              />
            </span>
          </Typography>

          <Stack direction="row" justifyContent="center" alignItems="center" margin={3} spacing={2}>
            <SocialIcon url="https://github.com/Viqui-Alaro" network="github" bgColor="#ffffff" />
            <SocialIcon url="https://www.facebook.com/viqui.alaromamni/" network="facebook" bgColor="#ffffff" />
            <SocialIcon url="https://www.linkedin.com/in/viqui-alaro-mamani-b9b912137" network="linkedin" bgColor="#ffffff" />
          </Stack>

          <Stack direction="column" justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              sx={{ 
                borderRadius: 8, 
                px: 4, 
                py: 1.5,
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#115293" }
              }}
              endIcon={<FileDownloadIcon />}
              onClick={onButtonClick}
            >
              Descargar CV
            </Button>
            <Box sx={{ mt: 4 }}>
              <Footer style={{ color: "rgba(255,255,255,0.7)" }} />
            </Box>
          </Stack>

        </Grid>
      </Grid>
    </Box>
  );
}