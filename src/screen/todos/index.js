import React, { PureComponent } from "react";

export default class index extends PureComponent {
  // write  your todo in textbox
  // submit your todo
  // display your submited todo
  // remove text from text box
  state = {
    todos: [],
    todo: "",
    todo1: ""
  };

  changeText = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    const { todos, todo } = this.state;
    this.setState({
      todos: [...todos, { text: todo, done: false }],
      todo: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <form onSubmit={this.submit}>
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            onChange={this.changeText}
          />

          <input
            type="text"
            name="todo1"
            value={this.state.todo1}
            onChange={this.changeText}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.todos.map((x, i) => (
          <p key={i}>{x.text}</p>
        ))}
      </div>
    );
  }
}
