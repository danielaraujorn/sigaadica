export default theme => ({
  container: {
    padding: "3px 6px",
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    minWidth: 320
  },
  paper: {
    padding: 10,
    backgroundImage: `linear-gradient(to left,#fafafa,#fcfcfc)`,
    borderRadius: theme.shape.borderRadius
  },
  title: {
    fontWeight: 500
  },
  subTitle: {
    fontSize: 12,
    fontWeight: 200
  }
});
