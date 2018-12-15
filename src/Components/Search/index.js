import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
import InputBase from "@material-ui/core/InputBase";
import logo from "../../assets/logo.svg";
import simbolo from "../../assets/simbolo.svg";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import queryString from "query-string";
import { request } from "../../utils";
import { disciplinasRota } from "../../config";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
// import response from "./results";
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = store => ({
  results: store.results
});

class Search extends React.Component {
  state = { searchText: "", sendTimeout: null };
  componentDidMount() {
    const { text } = queryString.parse(this.props.history.location.search);
    if (typeof text === "string") {
      this.setState({ searchText: text });
    }
  }
  changeStateText = event => {
    clearTimeout(this.state.sendTimeout);
    this.setState({
      searchText: event.target.value,
      sendTimeout:
        event.target.value.length > 2 && setTimeout(() => this.submit(), 1000)
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

    this.state.searchText.length > 0 &&
      request(disciplinasRota + "/?search=" + this.state.searchText).then(
        response => {
          console.log(response.data);
          if (response.status === 200)
            this.props.saveResults(response.data.results);
        }
      );
  };
  render() {
    const { classes, history } = this.props;
    const bigSize =
      history.location.pathname === "/" || !this.props.results.length;
    return (
      <div
        className={classes.container}
        style={{ height: bigSize ? "100vh" : 56 }}
      >
        <div className={classes.row}>
          {bigSize && <img alt="logo" className={classes.logoImg} src={logo} />}
          <div className={classes.paper}>
            <form className={classes.form} onSubmit={this.submit}>
              <InputBase
                autoComplete="pesquisaSigaADica"
                className={classes.textField}
                id="outlined-name"
                placeholder="Pesquise no Siga a Dica"
                variant="outlined"
                autoFocus
                value={this.state.searchText}
                onChange={this.changeStateText}
                startAdornment={
                  <InputAdornment position="start">
                    <img
                      alt="simbolo"
                      className={classes.simbolo}
                      src={simbolo}
                    />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      type="submit"
                      aria-label="Toggle password visibility"
                      //   onClick={this.handleClickShowPassword}
                    >
                      <SearchIcon
                        fontSize="small"
                        className={classes.searchIcon}
                      />
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
  history: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
  saveResults: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Search));
