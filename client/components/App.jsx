import React from 'react';
import Time from './Time.jsx';
import TodoBox from './TodoBox.jsx';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Time />
        <TodoBox />
      </section>
    )
  }
}
