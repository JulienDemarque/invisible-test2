import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { updateSearchTerm, callAPI } from "../actions";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false, selectValue: "price_asc" };
  }

  handleSubmit = formProps => {
    // We could go and take the searchInput from the redux state as an alternative
    // const query = {
    //   searchTerm: formProps.searchInput,
    //   sort: this.state.selectValue
    // };
    this.callAPI();
  };

  handleSelectChange = e => {
    this.setState({ selectValue: e.target.value }, () => {
      this.callAPI();
    });
  };

  callAPI = () => {
    console.log("this.props.formData", this.props.formData);
    const { searchItem } = this.props.formData;
    const searchTerm = searchItem.values
      ? searchItem.values.searchInput
      : "javascript";
    const query = {
      searchTerm: searchTerm,
      sort: this.state.selectValue
    };
    this.props.callAPI(query);
  };

  handleCloseOpenMenu = () => {
    this.setState(({ isActive }) => ({ isActive: !isActive }));
  };

  render() {
    console.log("apiCallData", this.props.apiCallData);
    const { apiCallData, handleSubmit } = this.props;
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <form autoComplete="off" onSubmit={handleSubmit(this.handleSubmit)}>
              <div className="field has-addons">
                <div className="control">
                  <Field
                    name="searchInput"
                    component="input"
                    className="input"
                    type="text"
                    placeholder="Search Item"
                    autoComplete="off"
                  />
                </div>
                <div className="control">
                  <button type="submit" className="button is-primary">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <a
            onClick={this.handleCloseOpenMenu}
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={
            this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="select is-primary">
                <select
                  value={this.state.selectValue}
                  onChange={this.handleSelectChange}
                >
                  <option value="price_asc">Price Ascending</option>
                  <option value="price_desc">Price Descending</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    apiCallData: state.apiCall,
    formData: state.form
  };
}

const mapDispatchToProps = dispatch => ({
  callAPI: props => {
    dispatch(callAPI(props));
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({ form: "searchItem" })
)(Header);
