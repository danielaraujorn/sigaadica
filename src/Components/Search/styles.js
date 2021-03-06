export default theme => {
  console.log(theme);
  return {
    container: {
      backgroundImage: `linear-gradient(to bottom,#fffd, transparent)`,
      width: "100%",
      position: "fixed",
      display: "flex",
      alignItems: "center",
      transitionDuration: 300
    },
    buttons: { marginTop: 14, display: "flex", justifyContent: "center" },
    button: { marginLeft: 5, marginRight: 5 },
    row: { display: "flex", flexFlow: "column", width: "100%" },
    logoImg: {
      minWidth: 300,
      // opacity: 0.6,
      width: "80%",
      maxWidth: 450,
      margin: "auto",
      padding: 20,
      transitionDuration: 300
    },
    simbolo: { cursor: "pointer", height: 30, margin: "7px 2px 7px 12px" },
    paper: {
      width: "100%",
      maxWidth: 600,
      margin: "auto",
      minWidth: 320,
      padding: 6
    },
    form: {
      backgroundImage: `linear-gradient(to left,${
        theme.palette.primary.main
      }, ${theme.palette.primary.light})`,
      borderRadius: theme.shape.borderRadius,
      padding: 2
    },
    textField: {
      width: "100%",
      // backgroundColor: "rgba(255,255,255,0.12)",
      backgroundColor: "white",
      borderRadius: theme.shape.borderRadius - 1,
      padding: "6px 0"
    }
  };
};
