import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import InputBase from "@material-ui/core/InputBase";
import logo from "../../assets/logo.svg";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import queryString from "query-string";
class Search extends React.Component {
  state = { searchText: "", sendTimeout: null };
  componentDidMount() {
    // setTimeout(() => this.setState({ search: true }), 2000);
    const { text } = queryString.parse(this.props.history.location.search);
    if (typeof text === "string") {
      this.setState({ searchText: text });
    }
  }

  // changeState = name => value => this.setState({ [name]: value });
  changeStateText = event => {
    clearTimeout(this.state.sendTimeout);
    this.setState({
      searchText: event.target.value,
      sendTimeout: setTimeout(() => this.submit(), 400)
    });
  };
  submit = e => {
    e && e.preventDefault();
    clearTimeout(this.state.sendTimeout);
    this.props.history.push({
      pathname: "/search",
      search: this.state.searchText.length
        ? "?text=" + this.state.searchText
        : ""
    });
  };
  render() {
    const { classes, history } = this.props;
    return (
      <div
        className={classes.container}
        style={{ height: history.location.pathname === "/" ? "100vh" : 56 }}
      >
        <div className={classes.row}>
          {history.location.pathname === "/" && (
            <img alt="logo" className={classes.logoImg} src={logo} />
          )}
          <div className={classes.paper}>
            <form onSubmit={this.submit}>
              <InputBase
                autoComplete="pesquisaSigaADica"
                className={classes.textField}
                id="outlined-name"
                placeholder="Pesquise no Siga a Dica"
                variant="outlined"
                autoFocus
                value={this.state.searchText}
                onChange={this.changeStateText}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      type="submit"
                      aria-label="Toggle password visibility"
                      //   onClick={this.handleClickShowPassword}
                    >
                      <SearchIcon fontSize="small" style={{ color: "white" }} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Search.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
