export default theme => {
  console.log(theme);
  return {
    container: {
      backgroundImage: `linear-gradient(to right,${
        theme.palette.primary.light
      }, ${theme.palette.primary.main})`,
      display: "flex",
      alignItems: "center",
      transitionDuration: 300
    },
    row: { display: "flex", flexFlow: "column", width: "100%" },
    logoImg: {
      opacity: 0.6,
      width: 250,
      margin: "15px auto",
      transitionDuration: 300
    },
    paper: {
      width: 280,
      padding: "6px 15px",
      margin: "auto",
      backgroundColor: "rgba(255,255,255,0.12)",
      borderRadius: theme.shape.borderRadius
    },
    textField: {
      color: theme.palette.primary.contrastText
    }
  };
};
