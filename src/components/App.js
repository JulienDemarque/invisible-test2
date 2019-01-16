import React, { Component } from "react";
import { connect } from "react-redux";
import { callAPI } from "../actions";
import "bulma/css/bulma.css";

import "../App.css";
import Header from "./Header";
import ListItems from "./ListItems";

class App extends Component {
  componentDidMount() {
    const query = { searchTerm: "javascript", sort: "price_asc" };
    this.props.callAPI(query);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ListItems />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  callAPI: props => {
    dispatch(callAPI(props));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);
