import { createTheme } from "@mui/material/styles";

// Tema centralizado del portafolio.
// Antes los colores estaban repetidos "a mano" en varios componentes
// (#3F51B5, #303F9F, #448AFF...). Ahora viven en un solo lugar:
// si quieres cambiar la paleta completa, solo edita esto.
const theme = createTheme({
  palette: {
    primary: {
      main: "#3F51B5", // indigo — color principal (pestañas, botones, acentos)
      dark: "#303F9F",
      light: "#7986CB",
    },
    secondary: {
      main: "#448AFF",
    },
    background: {
      default: "#0F1229", // fondo oscuro del panel de proyectos
      paper: "#ffffff",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      "sans-serif",
    ].join(","),
  },
});

export default theme;
