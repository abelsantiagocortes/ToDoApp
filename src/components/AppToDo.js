import React, { Component } from 'react';
import ListTodo from './ListToDo';
import AddToDo from './AddToDo';

class AppToDo extends Component {

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

  addToDo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    });
    console.log(todos);
  }

  render() {
    return (
    
      <div className="todoApp container">

      <h1 className="center blue-text">To Do List</h1>

      <ListTodo todos={this.state.todos} mark = {this.markCompleted}></ListTodo>
      <AddToDo addToDo={this.addToDo}></AddToDo>


    </div>)

  }




}

export default AppToDo;
