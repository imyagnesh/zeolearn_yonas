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
    displayType: "all",
    error: "",
    loading: false
  };

  // constructor(params) {

  // }

  componentDidMount = async () => {
    try {
      this.setState({ loading: true });
      const res = await fetch("http://localhost:3004/todos");
      const todos = await res.json();
      this.setState({ todos });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  changeText = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submit = event => {
    event.preventDefault();

    import("date-fns").then(async ({ format }) => {
      const createdAt = format(new Date(), "MM/dd/yyyy");

      const { todos, todo } = this.state;

      const newTodo = {
        text: todo,
        done: false,
        createdAt
      };

      try {
        this.setState({ loading: true });
        const res = await fetch("http://localhost:3004/todos", {
          method: "POST",
          body: JSON.stringify(newTodo),
          headers: {
            accept: "application/json",
            "Content-Type": "application/json"
          }
        });
        const AddedTodo = await res.json();

        this.setState({
          todos: [...todos, AddedTodo],
          todo: ""
        });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    });
  };

  deleteTodo = async id => {
    try {
      this.setState({ loading: true });
      const { todos } = this.state;

      await fetch(`http://localhost:3004/todos/${id}`, {
        method: "DELETE"
      });

      const index = todos.findIndex(x => x.id === id);

      this.setState({
        todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  editTodo = async todo => {
    try {
      this.setState({ loading: true });
      const { todos } = this.state;

      const updatedTodo = { ...todo, done: !todo.done };

      const res = await fetch(`http://localhost:3004/todos/${todo.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedTodo),
        headers: {
          accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const resTodo = await res.json();

      const index = todos.findIndex(x => x.id === todo.id);

      this.setState({
        todos: [...todos.slice(0, index), resTodo, ...todos.slice(index + 1)]
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  changeDisplayType = type => {
    this.setState({ displayType: type });
  };

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return <h1>Loading...</h1>;
    }
    if (!!error) {
      return <h1>{error}</h1>;
    }
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
