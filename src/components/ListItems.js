import React, { Component } from "react";

class ListItems extends Component {
  render() {
    return (
      <div className="section">
        <div className="columns is-multiline">
          <div className="column is-one-quarter">
            <div className="box">is-one-quarter</div>
          </div>
          <div className="column is-one-quarter">
            <div className="box">is-one-quarter</div>
          </div>
          <div className="column is-one-quarter">
            <div className="box">is-one-quarter</div>
          </div>
          <div className="column is-one-quarter">
            <div className="box">is-one-quarter</div>
          </div>
          <div className="column is-one-quarter">
            <div className="box">is-one-quarter</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItems;
