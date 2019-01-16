import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  handleSubmit = formProps => {
    this.props.resetPagination(() => {
      this.props.callAPI();
    });
  };

  handleCloseOpenMenu = () => {
    this.setState(({ isActive }) => ({ isActive: !isActive }));
  };

  render() {
    console.log("apiCallData", this.props.apiCallData);
    //We might need apiCallData later...
    const {
      apiCallData,
      handleSubmit,
      selectValue,
      handleSelectChange,
      handleNextPage,
      handlePreviousPage
    } = this.props;

    let hasMorePage = true;
    let hasPreviousPage = false;
    let totalPage = 0;
    if (apiCallData.paging) {
      hasMorePage = apiCallData.paging.total > apiCallData.paging.offset + 50;
      hasPreviousPage = apiCallData.paging.offset !== 0;
      console.log(apiCallData.paging.total);
      totalPage = Math.floor(apiCallData.paging.total / 50) + 1;
    }

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
              {hasPreviousPage && (
                <button className="button" onClick={handlePreviousPage}>
                  Previous page
                </button>
              )}
            </div>
            <div className="navbar-item">
              {hasMorePage && (
                <button className="button is-primary" onClick={handleNextPage}>
                  Next page
                </button>
              )}
            </div>
            <div className="navbar-item">
              <div>
                Page: {this.props.page}/{totalPage}
              </div>
            </div>
            <div className="navbar-item">
              <div className="select is-primary">
                <select value={selectValue} onChange={handleSelectChange}>
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
    apiCallData: state.apiCall
  };
}

export default compose(
  connect(
    mapStateToProps,
    null
  ),
  reduxForm({ form: "searchItem" })
)(Header);
