import React from 'react';

export default class TodoForm extends React.Component {
  render() {
    return (
      <section id="todo-prompt">
        <h3>What is your main focus for today?</h3>
        <input type="text" id="todo-input"></input>
      </section>
    )
  }
};
