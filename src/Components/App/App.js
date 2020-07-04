import React, { Component } from 'react';
import appClasses from './App.css';
import Box from './../Box/Box'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      index : null,
      count: 0,
      firstPlayer : [],
      secondPlayer : [],
      color: null
    })
  }

  render() { 
    return (
      <div className={appClasses.app}>
        <div>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </div>
        <div>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </div>
        <div>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </div>
      </div>
    )
  }
}

export default App;
