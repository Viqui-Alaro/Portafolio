import * as React from "react";
import Footer from "./Footer";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Typography } from "@mui/material";
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
    // using Java Script method to get PDF file
    fetch(curriculum).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV - ALARO MAMANI VIQUI MARIBEL.pdf";
        alink.click();
      });
    });
  };

  return (
    <Grid container>
      <Grid item xs={12} sx={{ height: "100%", px: 3, textAlign: "center" }}>
        <Stack direction="column" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
          <SpinningText text="Frontend * Backend * Software * Engineer * ">
            <img src={GotMilk} alt="Foto de perfil de Abraham Villca" />
          </SpinningText>
        </Stack>

        <Typography variant="subtitle2" gutterBottom sx={{ mt: 3 }}>
          Hola! 👋 Mi nombre es...
        </Typography>
        <Typography className="prueba" variant="h4" gutterBottom>
          <TypeIt
            options={{ loop: true }}
            getBeforeInit={(instance) => {
              instance
                .type("Viqui Alaro")
                .pause(750)
                .delete(3)
                .pause(500)
                .type("llca ")
                .pause(10000);

              // Remember to return it!
              return instance;
            }}
          >
            {" "}
          </TypeIt>
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          Soy un desarrolladora Full Stack Developer Apasionado por la
          programación creando proyectos de código abierto.
        </Typography>

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          margin={1}
          spacing={1}
        >
          <SocialIcon url="https://github.com/Viqui-Alaro" network="github" />
          <SocialIcon
            url="https://www.facebook.com/viqui.alaromamni/"
            network="facebook"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/viqui-alaro-mamani-b9b912137"
            network="linkedin"
          />
        </Stack>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            sx={{ borderRadius: 12.5 }}
            endIcon={<FileDownloadIcon />}
            onClick={onButtonClick}
          >
            Descargar CV
          </Button>
          <Footer style={{ color: "red" }} />
        </Stack>
      </Grid>
    </Grid>
  );
}
