export default theme => {
  console.log(theme);
  return {
    container: {
      backgroundImage: `linear-gradient(to right,${
        theme.palette.secondary.light
      }, ${theme.palette.secondary.main})`,
      display: "flex",
      alignItems: "center",
      height: "100vh"
    },
    paper: {
      maxWidth: 600,
      flex: 1,
      margin: "auto"
    },
    textField: {
      borderColor: "purple"
    }
  };
};
