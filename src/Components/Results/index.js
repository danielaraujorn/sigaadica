import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import Typography from "@material-ui/core/Typography";
const results = [
  { name: "Calculo 1", codigo: "ECT2391" },
  { name: "Calculo 2", codigo: "ECT2392" },
  { name: "Calculo 3", codigo: "ECT2393" }
];
class Results extends React.Component {
  //   state = { ResultsText: "" };
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
    return results.map(item => (
      <div key={item.codigo} className={classes.container}>
        <div className={classes.paper}>
          <Typography className={classes.title}>{item.name}</Typography>
          <Typography className={classes.subTitle}>
            codigo: {item.codigo}
          </Typography>
        </div>
      </div>
    ));
  }
}
Results.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Results);
