import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: { black: "rgba(13, 13, 13, 1)", white: "#fff" },
    background: { paper: "rgba(255, 255, 255, 1)", default: "#fafafa" },
    primary: {
      light: "rgba(0, 154, 214, 1)",
      main: "rgba(0, 99, 172, 1)",
      dark: "rgba(0, 70, 122, 1)",
      contrastText: "#fff"
    },
    secondary: {
      light: "rgba(91, 240, 103, 1)",
      main: "rgba(0, 176, 55, 1)",
      dark: "rgba(0, 143, 60, 1)",
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
