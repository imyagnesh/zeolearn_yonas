import React, { PureComponent } from "react";
import TodoHeader from "./todoHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import TodoBottomBar from "./todoBottomBar";

export default class index extends PureComponent {
  // write  your todo in textbox
  // submit your todo
  // display your submited todo
  // remove text from text box

  state = {
    todos: [],
    todo: "",
    displayType: "all"
  };

  changeText = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = event => {
    event.preventDefault();
    const { todos, todo } = this.state;
    this.setState({
      todos: [
        ...todos,
        { Id: Number(new Date().getTime()), text: todo, done: false }
      ],
      todo: ""
    });
  };

  deleteTodo = id => {
    const { todos } = this.state;

    const index = todos.findIndex(x => x.Id === id);

    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    });
  };

  editTodo = todo => {
    const { todos } = this.state;

    const index = todos.findIndex(x => x.Id === todo.Id);

    this.setState({
      todos: [
        ...todos.slice(0, index),
        { ...todo, done: !todo.done },
        ...todos.slice(index + 1)
      ]
    });
  };

  changeDisplayType = type => {
    this.setState({ displayType: type });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 10px)"
        }}
      >
        {/* header */}
        <TodoHeader />
        {/* form */}
        <TodoForm
          value={this.state.todo}
          submit={this.submit}
          changeText={this.changeText}
        />
        {/* list */}
        <TodoList
          todos={this.state.todos}
          displayType={this.state.displayType}
          editTodo={this.editTodo}
          deleteTodo={this.deleteTodo}
        />
        {/* bottom bar */}
        <TodoBottomBar changeDisplayType={this.changeDisplayType} />
      </div>
    );
  }
}
