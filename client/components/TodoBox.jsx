import React from 'react';
import TodoForm from './TodoForm.jsx'
import Todo from './Todo.jsx'

export default class TodoBox extends React.Component {
  constructor() {
    super()

    this.state = {
      toDoItems: []
    }
  }

  render() {
    return (
      <section>
        <TodoForm addToDo={this._addToDo.bind(this)}/>
      </section>
    )
  }

  _getToDoItems() {
    return this.state.toDoItems.map(function(item) {
      return (
        <Todo body={item.body} key={item.id} />
      )
    });
  }

  _addToDo(todo) {
    let newToDo = {
      id: this.state.toDoItems.length + 1,
      body: todo
    };

    this.setState({toDoItems: this.state.toDoItems.concat([newToDo])});
  }
};
