import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "../redux-connector.js";

export class Component2 extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>The Component2 Page</h1>
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
)(Component2);
