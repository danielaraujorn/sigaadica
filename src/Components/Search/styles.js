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
    row: { display: "flex", flexFlow: "column", width: "100%" },
    logoImg: {
      minWidth: 320,
      // opacity: 0.6,
      width: "90%",
      maxWidth: 450,
      margin: "auto",
      padding: 20,
      transitionDuration: 300
    },
    simbolo: { height: 30, margin: "7px 0 7px 10px" },
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
    },
    searchIcon: {
      color: theme.palette.primary.main
    }
  };
};
