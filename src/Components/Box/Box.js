import React, { Component } from 'react'

class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "blue",
            isUsed: false,
            fix: false
        }
    }

    changeState() {
        this.setState((prevState, props) => {
            return {
                color: props.backColor,
                isUsed: true,
                fix: false
            }
        })
    }

    reset = () => {
        if (!this.state.fix) {
            this.setState(() => {
                return ({
                    isUsed: false,
                    color: "blue",
                    fix: true
                })
            })
        }
    }

    render() {
        let cssObj = {
            width: "100px",
            border: "1px solid green",
            padding: "1px",
            margin: "1px",
            height: "100px",
        }
        if (!this.props.start) {
            this.reset()
        }
        cssObj.backgroundColor = this.state.color
        return (
            <button style={cssObj} onClick={() => {
                if (!this.state.isUsed && this.props.start) {
                    this.changeState()
                    this.props.onClick();
                }
                if (!this.props.start) {
                    // this.reset()
                    this.props.showStartModal()
                }
                if (this.state.isUsed) {
                    this.props.showAlreadyClickedModal()
                }
            }
            }>
            </button>

        )
    }
}

export default Box;