import React, { Component } from "react";
import Header from "./header/Header";
import Table from "./calendar_table/Table";

class App extends Component {
 

  render() {
    return (
      <>
      <Header/>
      <Table/>
      </>
    );
  }
}

export default App;
