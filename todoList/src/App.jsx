import React from 'react';
import './App.css';
import TodoItem from './Components/TodoItem';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todoList: [],
    };
  }

  inputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  updateItem = (newItem, index) => {
    const updatedList = [...this.state.todoList];
    updatedList[index] = newItem;

    this.setState({
      todoList: updatedList,
    });
  };

  deleteItem = (index) => {
    const updatedList = this.state.todoList.filter((_, i) => i !== index);

    this.setState({
      todoList: updatedList,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.trim().length > 0) {
      this.setState({
        input: "",
        todoList: [...this.state.todoList, this.state.input.trim()],
      });
    }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <h1>TODO LIST</h1>
        <form onSubmit={this.formSubmit}>
          <input
            type="text"
            placeholder="Type here"
            onChange={this.inputChange}
            value={this.state.input}
          />
          <button>A D D</button>
        </form>
        <p>{this.state.input}</p>

        <div className="todoList flex">
          <h2> ⬇️ 🤯 LIST 🤯 ⬇️</h2>

          {this.state.todoList.length === 0 ? (
            <h3>List is Empty</h3>
          ) : (
            this.state.todoList.map((e, i) => (
              <TodoItem
                key={i}
                e={e}
                i={i}
                deleteItem={this.deleteItem}
                updateItem={this.updateItem}
              />
            ))
          )}
        </div>
      </>
    );
  }
}