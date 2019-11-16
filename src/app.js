import React, { Component } from "react";

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
    if (
      this.props.title !== nextProps.title ||
      this.state.greet !== nextState.greet
    ) {
      return true;
    }
    return false;
  }

  componentDidMount() {
    console.log(document.getElementsByTagName("h1"));
  }

  onClick = () => {
    this.setState({
      greet: "I am fine."
    });
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
