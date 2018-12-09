import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "./styles.js";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
class Search extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <TextField
            className={classes.textField}
            id="outlined-name"
            placeholder="Pesquise no Siga a Dica"
            variant="outlined"
            fullWidth
            autoFocus
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  //   onClick={this.handleClickShowPassword}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </Paper>
      </div>
    );
  }
}
Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
