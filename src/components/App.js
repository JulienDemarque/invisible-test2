import React, { Component } from "react";
import { connect } from "react-redux";
import { callAPI } from "../actions";
import "bulma/css/bulma.css";

import "../App.css";
import Header from "./Header";
import ListItems from "./ListItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selectValue: "price_asc", page: 1 };
  }

  componentDidMount() {
    //REFACTOR: Should put the initial query in its own file and import it
    const query = { searchTerm: "javascript", sort: "price_asc", page: 1 };
    this.props.callAPI(query);
  }

  callAPI = () => {
    console.log("this.props.formData", this.props.formData);
    const { searchItem } = this.props.formData;
    const searchTerm = searchItem.values
      ? searchItem.values.searchInput
      : "javascript";
    const query = {
      searchTerm: searchTerm,
      sort: this.state.selectValue,
      page: this.state.page
    };
    this.props.callAPI(query);
  };

  handleSelectChange = e => {
    this.setState({ selectValue: e.target.value }, () => {
      this.callAPI();
    });
  };

  resetPagination = callback => {
    this.setState({ page: 1 }, callback);
  };

  handleNextPage = () => {
    //  console.log("handleNextPage");
    this.setState(
      ({ page }) => ({ page: page + 1 }),
      () => {
        this.callAPI();
      }
    );
  };

  handlePreviousPage = () => {
    this.setState(
      ({ page }) => ({ page: page - 1 }),
      () => {
        this.callAPI();
      }
    );
  };

  render() {
    return (
      <div className="container">
        <Header
          resetPagination={this.resetPagination}
          selectValue={this.state.selectValue}
          handleSelectChange={this.handleSelectChange}
          callAPI={this.callAPI}
          handleNextPage={this.handleNextPage}
          handlePreviousPage={this.handlePreviousPage}
          page={this.state.page}
        />
        <ListItems />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formData: state.form
  };
}

const mapDispatchToProps = dispatch => ({
  callAPI: props => {
    dispatch(callAPI(props));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
