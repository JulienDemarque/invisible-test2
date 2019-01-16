import React, { Component } from "react";
import { connect } from "react-redux";

import Item from "./Item";

class ListItems extends Component {
  render() {
    console.log("apiCallData", this.props.apiCallData);
    const { apiCallData } = this.props;
    return (
      <div className="section">
        <div className="columns is-multiline">
          {apiCallData.results &&
            apiCallData.results.map(result => (
              <Item key={result.id} data={result} />
            ))}
        </div>
      </div>
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
)(ListItems);
