import React, { PureComponent } from "react";

export default class child1 extends PureComponent {
  render() {
    console.log("child1");

    return (
      <div>
        {/* {this.props.user.name} */}
        <h1>Hello From child1</h1>
      </div>
    );
  }
}
