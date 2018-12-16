import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import queryString from "query-string";
// import { bindActionCreators } from "redux";
// import * as actions from "./actions";
// const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = store => ({
  results: store.results
});

class Results extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => this.setState({ Results: true }), 2000);
  // }

  // changeState = name => value => this.setState({ [name]: value });
  changeStateText = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    const { classes, history, results } = this.props;
    const { search } = queryString.parse(history.location.search);
    if (typeof search === "string" && search.length > 0)
      return (
        <div className={classes.paddingSearch}>
          {results.map(item => (
            <div key={item.pk} className={classes.container}>
              <div className={classes.paper}>
                <div className={classes.centerContent}>
                  <Typography className={classes.title}>{item.nome}</Typography>
                  <Typography className={classes.subTitle}>
                    {item.departamento}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    else return null;
  }
}
Results.propTypes = {
  classes: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(withStyles(styles)(Results));
