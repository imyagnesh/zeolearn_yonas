import React, { Component } from "react";
import Test from "./components/test";
export default class app extends Component {
  state = {};

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);
    return { greet: `${props.title} how are you.`, greet1: "greet1", ...state };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (
      this.props.title !== nextProps.title ||
      this.state.greet !== nextState.greet
    ) {
      return true;
    }
    return true;
  }

  copyText = () => {
    console.log("copied");
  };

  componentDidMount() {
    this.timeout = setTimeout(() => {
      console.log("how are you?");
    }, 0);

    document.addEventListener("copy", this.copyText);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    return "hello how ara you?";
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    document.removeEventListener("copy", this.copyText);
    clearTimeout(this.timeout);
  }

  onClick = () => {
    throw new Error("OOps! something went wrong.");
  };

  render() {
    console.log("render");
    const { title, caption } = this.props;
    const { greet, greet1 } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <h4>{caption}</h4>
        <h2>{greet}</h2>
        <h2>{greet1}</h2>
        <button onClick={this.onClick}>Click Me</button>
      </div>
    );
  }
}
