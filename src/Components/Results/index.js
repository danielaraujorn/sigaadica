import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
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
    const { classes } = this.props;
    return (
      <div className={classes.paddingSearch}>
        {this.props.results.map(item => (
          <div key={item.pk} className={classes.container}>
            <div className={classes.paper}>
              <Typography className={classes.title}>{item.nome}</Typography>
              <Typography className={classes.subTitle}>
                {item.departamento}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    );
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
