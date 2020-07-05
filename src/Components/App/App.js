import React, { Component } from 'react';
import appClasses from './App.css';
import Box from './../Box/Box'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.firstPlayer = {};
    this.secondPlayer = {};
    this.state = {
      count:1,
      firstPlayer: "Player-1",
      secondPlayer: "Player-2",
      start: false
    }
  }

  onFirstPlayerNameChange = event => {
    event.persist();
    this.setState((prevState, props) => {
      return ({ firstPlayer: event.target.value });
    })
  }

  onSecondPlayerNameChange = event => {
    event.persist();
    this.setState((prevState, props) => {
      return ({ secondPlayer: event.target.value });
    })
  }

  onClickHandler = (event) => {
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
    if (this.state.count == 10) {
      console.log ("Game over. It's a draw")
      this.firstPlayer = {};
      this.secondPlayer = {};
      this.setState ((prevState, props) => {
        return ({
          count:1,
          firstPlayer: "Player-1",
          secondPlayer: "Player-2",
          start: true
        })
      })   
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

  startGame  = (event) => {
    event.persist();
    if (!this.state.start) {
      this.setState (() => {
        return (
          {
            start: true
          }
        )
      })
    }
  }

  endGame = (event) => {
    if (this.state.start) {
      this.setState (() => {
        return (
          {
            start: false,
            count: 0
          }
        )
      })
    }
  }

  render() { 
    return (
      <div>
        <div>
          <input type="text" value={this.state.firstPlayer} onChange={this.onFirstPlayerNameChange}></input>
          <input type="text" value={this.state.secondPlayer} onChange={this.onSecondPlayerNameChange}></input>
        </div>
        <div>
          <Box onClick={this.onClickHandler.bind(this, "1")} backColor={this.state.count%2 ? "white":"black"} start={this.state.start}></Box>
          <Box onClick={this.onClickHandler.bind(this, "2")} backColor={this.state.count%2 ? "white":"black"} start={this.state.start}></Box>
          <Box onClick={this.onClickHandler.bind(this, "3")} backColor={this.state.count%2 ? "white":"black"} start={this.state.start}></Box>
        </div>
        <div>
          <Box onClick={this.onClickHandler.bind(this, "4")} backColor={this.state.count%2 ? "white":"black"} start={this.state.start}></Box>
          <Box onClick={this.onClickHandler.bind(this, "5")} backColor={this.state.count%2 ? "white":"black"} start={this.state.start}></Box>
          <Box onClick={this.onClickHandler.bind(this, "6")} backColor={this.state.count%2 ? "white":"black"} start={this.state.start}></Box>
        </div>
        <div>
          <Box onClick={this.onClickHandler.bind(this, "7")} backColor={this.state.count%2 ? "white":"black"} start={this.state.start}></Box>
          <Box onClick={this.onClickHandler.bind(this, "8")} backColor={this.state.count%2 ? "white":"black"} start={this.state.start}></Box>
          <Box onClick={this.onClickHandler.bind(this, "9")} backColor={this.state.count%2 ? "white":"black"} start={this.state.start}></Box>
        </div>
        <div>
        <Button variant="success" onClick={this.startGame}>Start</Button>
        <Button variant="danger" onClick={this.endGame}>Reset</Button>
        </div>
      </div>
    )
  }
}
export default App;
