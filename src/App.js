import React, { Component } from 'react';
import ListTodo from './ListToDo';

class App extends Component {

  state = {
    todos: [
      { id: 1, content: " Buy Milk" },
      { id: 2, content: "Finish Tutorials" }
    ]
  }

  // Component Functions

  markCompleted = (id) => {
    let todos = this.state.todos.filter(todo =>{
      if(todo.id ===id)
      {
        return false;
      }
      else {
        return true;
      }
    });
    this.setState({
      todos: todos
    });
  }
  render() {
    return (
    
      <div className="todoApp container">

      <h1 className="center blue-text">To Do List</h1>

      <ListTodo todos={this.state.todos} mark = {this.markCompleted}></ListTodo>


    </div>)

  }




}

export default App;
