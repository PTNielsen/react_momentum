import React from 'react';
import Time from './Time.jsx';
import Todo from './Todo.jsx';

export default class App extends React.Component {
  render() {
    return (
      <aside>
        <Time />
        <Todo />
      </aside>
    )
  }
}
