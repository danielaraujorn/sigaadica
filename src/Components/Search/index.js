import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import InputBase from "@material-ui/core/InputBase";
import logo from "../../assets/silhueta.svg";
import simbolo from "../../assets/simbolo.svg";
class Search extends React.Component {
  state = { searchText: "" };
  // componentDidMount() {
  //   setTimeout(() => this.setState({ search: true }), 2000);
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
      <div
        className={classes.container}
        style={{ height: this.state.searchText.length > 0 ? 56 : "100vh" }}
      >
        <div className={classes.row}>
          {this.state.searchText.length === 0 && (
            <img className={classes.logoImg} src={logo} />
          )}
          <div className={classes.paper}>
            <InputBase
              className={classes.textField}
              id="outlined-name"
              placeholder="Pesquise no Siga a Dica"
              variant="outlined"
              fullWidth
              autoFocus
              value={this.state.searchText}
              onChange={this.changeStateText("searchText")}
              // endAdornment={
              //   <InputAdornment position="end">
              //     <IconButton
              //       aria-label="Toggle password visibility"
              //       //   onClick={this.handleClickShowPassword}
              //     >
              //       <SearchIcon />
              //     </IconButton>
              //   </InputAdornment>
              // }
            />
          </div>
        </div>
      </div>
    );
  }
}
Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
