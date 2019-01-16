import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  render() {
    console.log("apiCallData", this.props.apiCallData);
    const { apiCallData } = this.props;
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Search Item"
                />
              </div>
              <div className="control">
                <a className="button is-primary">Search</a>
              </div>
            </div>
          </div>
          <a
            onClick={this.handleClick}
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
            <div className="navbar-item">{}</div>
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

export default connect(
  mapStateToProps,
  null
)(Header);
