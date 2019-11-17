import React, { useState, useEffect } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

export default function app({ test }) {
  const [test1, setTest1] = useState(test);

  const [user, setUser] = useState([
    {
      name: "yagnesh"
    }
  ]);

  const [teacher, setTeacher] = useState([
    {
      name: "yagnesh"
    }
  ]);

  // never use without second parameter
  // useEffect(() => {
  //   console.log("component did mount");
  // });

  // component did mount
  useEffect(() => {
    console.log("component did mount");

    document.addEventListener("copy", () => {});

    return () => {
      document.removeEventListener("copy", () => {});
    };
  }, []);

  useEffect(() => {
    console.log("component did update");
  }, [user]);

  useEffect(() => {
    console.log("component did update");
  }, [teacher]);

  const clickMe = () => {
    setUser([...user, { name: "rohit" }]);
  };

  console.log("render");

  return (
    <div>
      <h1>Parent Component</h1>
      {greet}
      {user.map(x => (
        <p>{x.name}</p>
      ))}
      <button onClick={clickMe}>Click Me</button>
      <Child1></Child1>
      <Child2></Child2>
    </div>
  );
}

// import React, { Component } from "react";
// import Child1 from "./child1";
// import Child2 from "./child2";

// export default class app extends Component {
//   state = {
//     user: {
//       name: "yagnesh"
//     }
//   };

//   clickMe = () => {
//     const { user } = this.state;
//     user.name = "rohit";
//     this.setState({ user: user });
//   };

//   render() {
//     console.log("app");
//     return (
//       <div>
//         <h1>Parent Component</h1>
//         {this.state.user.name}
//         <button onClick={this.clickMe}>Click Me</button>
//         <Child1 user={this.state.user}></Child1>
//         <Child2 user={this.state.user}></Child2>
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import Test from "./components/test";
// export default class app extends Component {
//   state = {};

//   constructor(props) {
//     super(props);
//     console.log("constructor");
//   }

//   static getDerivedStateFromProps(props, state) {
//     console.log(props);
//     console.log(state);
//     return { greet: `${props.title} how are you.`, greet1: "greet1", ...state };
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     console.log("shouldComponentUpdate");
//     if (
//       this.props.title !== nextProps.title ||
//       this.state.greet !== nextState.greet
//     ) {
//       return true;
//     }
//     return true;
//   }

//   copyText = () => {
//     console.log("copied");
//   };

//   componentDidMount() {
//     this.timeout = setTimeout(() => {
//       console.log("how are you?");
//     }, 0);

//     document.addEventListener("copy", this.copyText);
//   }

//   getSnapshotBeforeUpdate = (prevProps, prevState) => {
//     return "hello how ara you?";
//   };

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log(snapshot);
//     console.log("componentDidUpdate");
//   }

//   componentWillUnmount() {
//     document.removeEventListener("copy", this.copyText);
//     clearTimeout(this.timeout);
//   }

//   onClick = () => {
//     this.setState({ greet: "error" });
//   };

//   render() {
//     console.log("render");
//     const { title, caption } = this.props;
//     const { greet, greet1 } = this.state;
//     if (greet === "error") {
//       throw new Error("Eroor");
//     }
//     return (
//       <div>
//         <h1>{title}</h1>
//         <h4>{caption}</h4>
//         <h2>{greet}</h2>
//         <h2>{greet1}</h2>
//         <button onClick={this.onClick}>Click Me</button>
//       </div>
//     );
//   }
// }
