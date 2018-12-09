import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: { black: "rgba(13, 13, 13, 1)", white: "#fff" },
    background: { paper: "rgba(255, 255, 255, 1)", default: "#fafafa" },
    primary: {
      light: "rgba(0, 150, 219, 1)",
      main: "rgba(69, 59, 181, 1)",
      dark: "rgba(57, 50, 133, 1)",
      contrastText: "#fff"
    },
    secondary: {
      light: "rgba(170, 224, 29, 1)",
      main: "rgba(143, 184, 37, 1)",
      dark: "rgba(118, 144, 51, 1)",
      contrastText: "#fff"
    },
    error: {
      light: "rgba(225, 101, 101, 1)",
      main: "rgba(244, 51, 37, 1)",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  }
});
