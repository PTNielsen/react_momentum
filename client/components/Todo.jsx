import React from 'react';

export default class Todo extends React.Component {
  render() {
    return (
      <aside>
        <h1>{this.props.body}</h1>
      </aside>
    )
  }
}