import React, { Component } from 'react';
import appClasses from './App.css';
import Box from './../Box/Box'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowStartModal from './../../Modals/StartGame'
import ShowEndModal from './../../Modals/EndGame'
import ShowClickedModal from './../../Modals/AlreadyClicked'

class App extends Component {
  constructor(props) {
    super(props);
    this.firstPlayer = {};
    this.secondPlayer = {};
    this.state = {
      count: 1,
      firstPlayer: "Player-1",
      secondPlayer: "Player-2",
      start: false,
      showStartModal: false,
      showEndModal: false,
      winner: null,
      showClickedModal: false
    }
  }

  reset() {
    return (
      {
        count: 1,
        rstPlayer: "Player-1",
        secondPlayer: "Player-2",
        start: false,
        showStartModal: false,
        showEndModal: false,
        winner: null,
        showClickedModal: false
      }
    )
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
    let count = this.state.count+1;
    if (count % 2) {
      this.firstPlayer[event] = true;
      player = this.state.firstPlayer
    }
    else {
      this.secondPlayer[event] = true;
      player = this.state.secondPlayer
    }
    if (count == 10) {
      this.firstPlayer = {};
      this.secondPlayer = {};
      this.setState((prevState, props) => {
        let state = this.reset()
        state.winner = "It's a draw"
        state.showEndModal = true;
        this.firstPlayer = {};
        this.secondPlayer = {};
        return state;
      })
    }
    if (this.isWinner(count % 2 ? this.firstPlayer : this.secondPlayer)) {
      this.setState (() => {
        let state = this.reset()
        state.winner = `${player} has won`
        state.showEndModal = true;
        this.firstPlayer = {};
        this.secondPlayer = {};
        return state;
      })
    }
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    })
  }

  isWinner(playerObj) {
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

  closeStartModal =  () => {
        this.setState (() => {
            return (
                {
                    showStartModal:false
                }
            )
        })
    }

    closeClickedModal =  () => {
          this.setState (() => {
              return (
                  {
                      showClickedModal:false
                  }
              )
          })
      }

    closeEndModal =  () => {
          this.setState (() => {
              return (
                  {
                      showEndModal:false
                  }
              )
          })
      }

  startGame = (event) => {
    if (!this.state.start) {
      this.setState(() => {
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
      this.setState(() => {
        return (
          {
            start: false,
            count: 1
          }
        )
      })
    }
  }

  showStartModal = () => {
    this.setState ((prevState, props) => {
        return (
          {
            showStartModal: true
          }
        )
        
    })
}

  showClickedModal = () => {
    this.setState ((prevState, props) => {
        return (
          {
            showClickedModal: true
          }
        )
        
    })
}

  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.firstPlayer} onChange={this.onFirstPlayerNameChange}></input>
          <input type="text" value={this.state.secondPlayer} onChange={this.onSecondPlayerNameChange}></input>
        </div>
        <div>
          <Box onClick={this.onClickHandler.bind(this, "1")} backColor={this.state.count % 2 ? "white" : "black"} start={this.state.start} showStartModal={this.showStartModal.bind(this)} showAlreadyClickedModal={this.showClickedModal.bind(this)}></Box>
          <Box onClick={this.onClickHandler.bind(this, "2")} backColor={this.state.count % 2 ? "white" : "black"} start={this.state.start} showStartModal={this.showStartModal.bind(this)} showAlreadyClickedModal={this.showClickedModal.bind(this)}></Box>
          <Box onClick={this.onClickHandler.bind(this, "3")} backColor={this.state.count % 2 ? "white" : "black"} start={this.state.start} showStartModal={this.showStartModal.bind(this)} showAlreadyClickedModal={this.showClickedModal.bind(this)}></Box>
        </div>
        <div>
          <Box onClick={this.onClickHandler.bind(this, "4")} backColor={this.state.count % 2 ? "white" : "black"} start={this.state.start} showStartModal={this.showStartModal.bind(this)} showAlreadyClickedModal={this.showClickedModal.bind(this)}></Box>
          <Box onClick={this.onClickHandler.bind(this, "5")} backColor={this.state.count % 2 ? "white" : "black"} start={this.state.start} showStartModal={this.showStartModal.bind(this)} showAlreadyClickedModal={this.showClickedModal.bind(this)}></Box>
          <Box onClick={this.onClickHandler.bind(this, "6")} backColor={this.state.count % 2 ? "white" : "black"} start={this.state.start} showStartModal={this.showStartModal.bind(this)} showAlreadyClickedModal={this.showClickedModal.bind(this)}></Box>
        </div>
        <div>
          <Box onClick={this.onClickHandler.bind(this, "7")} backColor={this.state.count % 2 ? "white" : "black"} start={this.state.start} showStartModal={this.showStartModal.bind(this)} showAlreadyClickedModal={this.showClickedModal.bind(this)}></Box>
          <Box onClick={this.onClickHandler.bind(this, "8")} backColor={this.state.count % 2 ? "white" : "black"} start={this.state.start} showStartModal={this.showStartModal.bind(this)} showAlreadyClickedModal={this.showClickedModal.bind(this)}></Box>
          <Box onClick={this.onClickHandler.bind(this, "9")} backColor={this.state.count % 2 ? "white" : "black"} start={this.state.start} showStartModal={this.showStartModal.bind(this)} showAlreadyClickedModal={this.showClickedModal.bind(this)}></Box>
        </div>
        <div>
          <Button variant="success" onClick={this.startGame}>Start</Button>
          <Button variant="danger" onClick={this.endGame}>Reset</Button>
        </div>
        <div>
          {this.state.showStartModal ? <ShowStartModal show={true} closeStartModal={this.closeStartModal.bind(this)}/> : null}
        </div>
        <div>
          {this.state.showEndModal ? <ShowEndModal show={true} closeEndModal={this.closeEndModal.bind(this)} winner={this.state.winner}/> : null}
        </div>
        <div>
          {this.state.showClickedModal ? <ShowClickedModal show={true} closeClickedModal={this.closeClickedModal.bind(this)}/> : null}
        </div>
      </div>
    )
  }
}
export default App;
