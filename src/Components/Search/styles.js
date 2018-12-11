export default theme => {
  console.log(theme);
  return {
    container: {
      backgroundImage: `linear-gradient(to right,${
        theme.palette.primary.light
      }, ${theme.palette.primary.main})`,
      display: "flex",
      alignItems: "center",
      transitionDuration: 500
    },
    paper: {
      maxWidth: 600,
      flex: 1,
      margin: "6px auto"
    },
    textField: {
      color: theme.palette.primary.contrastText,
      padding: "6px 10px",
      backgroundColor: "rgba(255,255,255,0.12)",
      borderRadius: theme.shape.borderRadius
    }
  };
};
