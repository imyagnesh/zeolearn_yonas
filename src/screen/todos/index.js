import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeConsumer } from '../../context/themeContext';
import TodoHeader from './todoHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';
import TodoBottomBar from './todoBottomBar';

class index extends PureComponent {
  // write  your todo in textbox
  // submit your todo
  // display your submited todo
  // remove text from text box

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    todos: [],
    todo: '',
    displayType: 'all',
    error: '',
    loading: false,
  };

  // constructor(params) {

  // }

  componentDidMount = async () => {
    try {
      this.setState({ loading: true });
      const res = await fetch('http://localhost:3004/todos');
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

    import('date-fns').then(async ({ format }) => {
      const createdAt = format(new Date(), 'MM/dd/yyyy');

      const { todos, todo } = this.state;

      const newTodo = {
        text: todo,
        done: false,
        createdAt,
      };

      try {
        this.setState({ loading: true });
        const res = await fetch('http://localhost:3004/todos', {
          method: 'POST',
          body: JSON.stringify(newTodo),
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const AddedTodo = await res.json();

        this.setState({
          todos: [...todos, AddedTodo],
          todo: '',
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
        method: 'DELETE',
      });

      const i = todos.findIndex(x => x.id === id);

      this.setState({
        todos: [...todos.slice(0, i), ...todos.slice(i + 1)],
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
        method: 'PUT',
        body: JSON.stringify(updatedTodo),
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const resTodo = await res.json();

      const i = todos.findIndex(x => x.id === todo.id);

      this.setState({
        todos: [...todos.slice(0, i), resTodo, ...todos.slice(i + 1)],
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
    console.log(this.props);
    const { history } = this.props;
    const { loading, error, todo, todos, displayType } = this.state;
    if (loading) {
      return <h1>Loading...</h1>;
    }
    if (error) {
      return <h1>{error}</h1>;
    }

    console.log('todos');
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 10px)',
        }}
      >
        <ThemeConsumer>
          {value => (
            <div>
              <h1>{`Theme: ${value.theme}`}</h1>
              <button
                type="button"
                onClick={() => {
                  value.changeTheme(value.theme === 'dark' ? 'light' : 'dark');
                }}
              >
                Change Theme
              </button>
            </div>
          )}
        </ThemeConsumer>
        <button type="button" onClick={() => history.push('/about')}>
          Redirect
        </button>
        {/* header */}
        <TodoHeader />
        {/* form */}
        <TodoForm value={todo} submit={this.submit} changeText={this.changeText} />
        {/* list */}
        <TodoList
          todos={todos}
          displayType={displayType}
          editTodo={this.editTodo}
          deleteTodo={this.deleteTodo}
        />
        {/* bottom bar */}
        <TodoBottomBar changeDisplayType={this.changeDisplayType} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  products: state.products,
});

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(index);
