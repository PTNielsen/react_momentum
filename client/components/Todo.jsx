import React from 'react';
import TodoForm from './TodoForm.jsx'

export default class Todo extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <TodoForm />
    )
  }
};
