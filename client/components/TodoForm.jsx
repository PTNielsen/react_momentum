import React from 'react';

export default class TodoForm extends React.Component {
  render() {
    return (
      <section id="todo-prompt">
        <h3>What is your main focus for today?</h3>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <input type="text" id="todo-input" ref='todoItem'></input>
        </form>
      </section>
    )
  }

  _handleSubmit(e) {
    e.preventDefault();

    this.props.addToDo(this.refs.todoItem.value);
    this.refs.todoItem.value = '';
  }
};
