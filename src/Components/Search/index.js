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
import rotas from "../../rotas";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions";
// import response from "./results";
import Button from "@material-ui/core/Button";
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
const mapStateToProps = store => ({
  results: store.results
});

class Search extends React.Component {
  state = { searchText: "", sendTimeout: null };
  searchTextField = React.createRef();
  componentDidMount() {
    const { search } = queryString.parse(this.props.history.location.search);
    if (typeof search === "string" && search.length > 0) {
      this.setState({ searchText: search }, () => this.submit());
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
    if (this.state.searchText.length > 0) {
      this.props.history.push({
        pathname: "/",
        search: this.state.searchText.length
          ? "?search=" + this.state.searchText
          : ""
      });
      // this.props.saveResults(response.results);
      request(disciplinasRota + "/?search=" + this.state.searchText).then(
        response => {
          console.log(response.data);
          if (response.status === 200)
            this.props.saveResults(response.data.results);
        }
      );
    }
  };
  render() {
    const { classes, history, results } = this.props;
    const { search } = queryString.parse(this.props.history.location.search);
    const bigSize = !(
      results.length &&
      typeof search === "string" &&
      search.length > 0
    );
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
                inputRef={this.searchTextField}
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
                      onClick={() => {
                        this.searchTextField.current.focus();
                        this.props.history.push("/");
                        this.props.saveResults([]);
                      }}
                      alt="simbolo"
                      className={classes.simbolo}
                      src={simbolo}
                    />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      color="primary"
                      disabled={!this.state.searchText.length}
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
            {bigSize && (
              <div className={classes.buttons}>
                {rotas.map(({ name, path }) => (
                  <Button
                    key={name}
                    size="small"
                    onClick={() => history.push(path)}
                    className={classes.button}
                    variant="outlined"
                    color="secondary"
                  >
                    {name}
                  </Button>
                ))}
              </div>
            )}
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
