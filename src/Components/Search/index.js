import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import InputBase from "@material-ui/core/InputBase";
class Search extends React.Component {
  state = { search: false };
  componentDidMount() {
    setTimeout(() => this.setState({ search: true }), 2000);
  }
  render() {
    const { classes } = this.props;
    return (
      <div
        className={classes.container}
        style={{ height: this.state.search ? 56 : "100vh" }}
      >
        <div className={classes.paper}>
          <InputBase
            className={classes.textField}
            id="outlined-name"
            placeholder="Pesquise no Siga a Dica"
            variant="outlined"
            fullWidth
            autoFocus
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
    );
  }
}
Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
