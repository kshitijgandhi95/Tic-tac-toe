import React, { Component } from 'react';
import appClasses from './App.css';
import Box from './../Box/Box'

class App extends Component {
  constructor (props) {
    super(props);
    this.firstPlayer = {};
    this.secondPlayer = {};
    this.state = {
      count:1,
      firstPlayer: "Player-1",
      secondPlayer: "Player-2"
    }
  }

  onClickHandler (event) {
    let player = null;
    this.setState ((prevState, props) => {
      return {count:prevState.count+1}
    })
    if (this.state.count%2) {
      this.firstPlayer[event] = true;
      player = this.state.firstPlayer
    }
    else {
      this.secondPlayer[event] = true;
      player = this.state.secondPlayer
    }
    if (this.isWinner(this.state.count%2?this.firstPlayer:this.secondPlayer)) {
      console.log (`${player} won`)
    }
  }

  isWinner (playerObj) {
    if (playerObj["1"] && playerObj["2"] && playerObj["3"]) {
      return true;
    }
    if (playerObj["4"] && playerObj["5"] && playerObj["6"]) {
      return true;
    }
    if (playerObj["7"] && playerObj["8"] && playerObj["9"]) {
      return true;
    }
    if (playerObj["1"] && playerObj["4"] && playerObj["7"]) {
      return true;
    }
    if (playerObj["2"] && playerObj["5"] && playerObj["8"]) {
      return true;
    }
    if (playerObj["3"] && playerObj["6"] && playerObj["9"]) {
      return true;
    }
    if (playerObj["1"] && playerObj["5"] && playerObj["9"]) {
      return true;
    }
    if (playerObj["3"] && playerObj["5"] && playerObj["7"]) {
      return true;
    }
    return false;
  }

  render() { 
    return (
      <div>
        <div>
          <Box onClick={this.onClickHandler.bind(this, "1")} backColor={this.state.count%2 ? "white":"black"}></Box>
          <Box onClick={this.onClickHandler.bind(this, "2")} backColor={this.state.count%2 ? "white":"black"}></Box>
          <Box onClick={this.onClickHandler.bind(this, "3")} backColor={this.state.count%2 ? "white":"black"}></Box>
        </div>
        <div>
          <Box onClick={this.onClickHandler.bind(this, "4")} backColor={this.state.count%2 ? "white":"black"}></Box>
          <Box onClick={this.onClickHandler.bind(this, "5")} backColor={this.state.count%2 ? "white":"black"}></Box>
          <Box onClick={this.onClickHandler.bind(this, "6")} backColor={this.state.count%2 ? "white":"black"}></Box>
        </div>
        <div>
          <Box onClick={this.onClickHandler.bind(this, "7")} backColor={this.state.count%2 ? "white":"black"}></Box>
          <Box onClick={this.onClickHandler.bind(this, "8")} backColor={this.state.count%2 ? "white":"black"}></Box>
          <Box onClick={this.onClickHandler.bind(this, "9")} backColor={this.state.count%2 ? "white":"black"}></Box>
        </div>
      </div>
    )
  }
}
export default App;
