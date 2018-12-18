import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import styles from "./styles.js";
// import Typography from "@material-ui/core/Typography";
// import queryString from "query-string";

class Disciplina extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
  }

  // changeState = name => value => this.setState({ [name]: value });
  changeStateText = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    const { history } = this.props;
    return (
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            onClick={() => history.goBack()}
            color="inherit"
            aria-label="Menu"
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Disciplina
          </Typography>
        </Toolbar>
      </AppBar>
      //informações:
      //graficos
      // disqus
    );
  }
}
Disciplina.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default withStyles(styles)(Disciplina);
