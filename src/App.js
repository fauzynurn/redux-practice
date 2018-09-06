import React from "react";
import { connect } from "react-redux";
import { Main } from "./components/Main";
import { mapDispatchToProps, mapStateToProps } from "./redux-connector.js";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  render() {
    return <Main changeUsername={() => this.props.setName("Anna")} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
