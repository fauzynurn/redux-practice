import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux-connector.js";

export class Component1 extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>The Component1 Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <p>User Name: {this.props.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component1);
