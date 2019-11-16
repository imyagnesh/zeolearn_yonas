import React from "react";
import ReactDOM from "react-dom";
import { registerObserver } from "react-perf-devtool";
import ErrorBoundary from "./components/ErrorBoundary";
import App from "./app";

function callback(measures) {
  // do something with the measures
  // console.warn(measures);
  //   return {
  //     component: measures.componentName, // Name of the component
  //     mount: {
  //       // Mount time
  //       averageTimeSpentMs: measures.mount.averageTimeSpentMs,
  //       numberOfTimes: measures.mount.numberOfTimes,
  //       totalTimeSpentMs: measures.mount.totalTimeSpentMs
  //     },
  //     render: {
  //       // Render time
  //       averageTimeSpentMs: measures.render.averageTimeSpentMs,
  //       numberOfTimes: measures.render.numberOfTimes,
  //       totalTimeSpentMs: measures.render.totalTimeSpentMs
  //     },
  //     update: {
  //       // Update time
  //       averageTimeSpentMs: measures.update.averageTimeSpentMs,
  //       numberOfTimes: measures.update.numberOfTimes,
  //       totalTimeSpentMs: measures.update.totalTimeSpentMs
  //     },
  //     unmount: {
  //       // Unmount time
  //       averageTimeSpentMs: measures.unmount.averageTimeSpentMs,
  //       numberOfTimes: measures.unmount.numberOfTimes,
  //       totalTimeSpentMs: measures.unmount.totalTimeSpentMs
  //     },
  //     totalTimeSpent: measures.totalTimeSpent, // Total time taken by the component combining all the phases
  //     percentTimeSpent: measures.percentTimeSpent, // Percent time
  //     numberOfInstances: measures.numberOfInstances // Number of instances of the component
  //   };
  //     // Time taken in lifecycle hooks
  //     componentWillMount: {
  //       measures.componentWillMount.averageTimeSpentMs,
  //       measures.componentWillMount.numberOfTimes,
  //       measures.componentWillMount.totalTimeSpentMs,
  //     }
  //     componentDidMount: {
  //       measures.componentDidMount.averageTimeSpentMs,
  //       measures.componentDidMount.numberOfTimes,
  //       measures.componentDidMount.totalTimeSpentMs,
  //     }
  //     componentWillReceiveProps: {
  //       measures.componentWillReceiveProps.averageTimeSpentMs,
  //       measures.componentWillReceiveProps.numberOfTimes,
  //       measures.componentWillReceiveProps.totalTimeSpentMs,
  //     },
  //     shouldComponentUpdate: {
  //       measures.shouldComponentUpdate.averageTimeSpentMs,
  //       measures.shouldComponentUpdate.numberOfTimes,
  //       measures.shouldComponentUpdate.totalTimeSpentMs,
  //     },
  //     componentWillUpdate: {
  //       measures.componentWillUpdate.averageTimeSpentMs,
  //       measures.componentWillUpdate.numberOfTimes,
  //       measures.componentWillUpdate.totalTimeSpentMs,
  //     },
  //     componentDidUpdate: {
  //       measures.componentDidUpdate.averageTimeSpentMs,
  //       measures.componentDidUpdate.numberOfTimes,
  //       measures.componentDidUpdate.totalTimeSpentMs,
  //     },
  //     componentWillUnmount: {
  //       measures.componentWillUnmount.averageTimeSpentMs,
  //       measures.componentWillUnmount.numberOfTimes,
  //       measures.componentWillUnmount.totalTimeSpentMs,
  //     }
  //   }
}

var options = {
  shouldLog: true,
  port: 8080
};

registerObserver(options, callback);

ReactDOM.render(
  <ErrorBoundary>
    <App title="Hello" caption="Hello caption" />
  </ErrorBoundary>,
  document.getElementById("root")
);
