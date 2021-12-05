import React from 'react';

import './style.css';
import TaskBoard from './Task-board';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TaskBoard />
      </React.Fragment>
    );
  }
}
