export default theme => ({
  paddingSearch: { paddingTop: 56 },
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
    color: "#888",
    fontSize: 12,
    fontWeight: 200
  }
});
