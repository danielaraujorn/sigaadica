import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    typography: {
      useNextVariants: true
    },
    common: { black: "#0d0d0d", white: "#ffffff" },
    background: { paper: "#ffffff", default: "#fafafa" },
    primary: {
      light: "#009AD6",
      main: "#0063AC",
      dark: "#00467A",
      contrastText: "#ffffff"
    },
    secondary: {
      light: "#5BF067",
      main: "#00B037",
      dark: "#008F3C",
      contrastText: "#ffffff"
    },
    error: {
      light: "#e16565",
      main: "#f43325",
      dark: "#d32f2f",
      contrastText: "#ffffff"
    },
    text: {
      primary: "rgba(0,0,0,0.87)",
      secondary: "rgba(0,0,0,54)",
      disabled: "rgba(0,0,0,38)",
      hint: "rgba(0,0,0,38)"
    }
  }
});
