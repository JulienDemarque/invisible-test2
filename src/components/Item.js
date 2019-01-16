import React, { Component } from "react";

class Item extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="column is-one-fifth">
        <div className="card">
          <div className="card-image is-medium">
            <figure className="image is-4by3">
              <img alt={data.title} src={data.thumbnail} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-6">{data.id}</p>
              <p className="subtitle is-6">{data.title}</p>
            </div>
            <div className="content" />
          </div>
          <footer className="card-footer">
            <p className="card-footer-item">
              <span>
                <a target="_blank" href={data.permalink}>
                  Buy Now
                </a>
              </span>
            </p>
            <p className="card-footer-item">
              <span>${data.price}</span>
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Item;
