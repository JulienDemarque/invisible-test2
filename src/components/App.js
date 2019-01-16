import React, { Component } from "react";
import { connect } from "react-redux";
import { callAPI } from "../actions";
import "bulma/css/bulma.css";

import "../App.css";
import Header from "./Header";
import ListItems from "./ListItems";

class App extends Component {
  componentDidMount() {
    console.log("this.props.callAPI", this.props.callAPI);
    this.props.callAPI();
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
  callAPI: () => {
    dispatch(callAPI());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(App);
