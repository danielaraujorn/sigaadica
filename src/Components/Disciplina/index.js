import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from "@material-ui/icons/ArrowBack";
import styles from "./styles.js";
import { request } from "../../utils";
import { disciplinaRota } from "../../config";
import Disqus from "disqus-react";
import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import queryString from "query-string";

class Disciplina extends React.Component {
  state = {};
  componentDidMount() {
    const id = this.props.match.params.id;
    request(disciplinaRota + "/" + id).then(response => {
      console.log(response);
      if (response.status === 200)
        this.setState({ ...response.data, notFound: false });
      else this.setState({ notFound: true });
    });
  }

  // changeState = name => value => this.setState({ [name]: value });
  // changeStateText = name => event => {
  //   this.setState({
  //     [name]: event.target.value
  //   });
  // };
  render() {
    const { classes, match } = this.props;
    const { notFound, nome, departamento } = this.state;
    const disqusShortname = "sigaadica";
    const disqusConfig = {
      url: window.location.href,
      identifier: "disciplina/" + match.params.id,
      title: nome && nome
    };
    const { history } = this.props;
    return (
      <>
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
        {/* //informações: //graficos */}
        {nome && (
          <Paper className={classes.article}>
            <Typography variant="h1" className={classes.nome}>
              {nome}
            </Typography>
            <Typography variant="h4" className={classes.departamento}>
              {departamento}
            </Typography>
          </Paper>
        )}
        {!notFound && disqusConfig.title && disqusConfig.identifier && (
          <Paper className={classes.article}>
            {/* <Disqus.CommentCount
              shortname={disqusShortname}
              config={disqusConfig}
            >
              Comments
            </Disqus.CommentCount> */}
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </Paper>
        )}
      </>
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
