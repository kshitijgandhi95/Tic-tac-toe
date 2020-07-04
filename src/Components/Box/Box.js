import React, { Component } from 'react'

class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "blue",
            isUsed: false
        }
    }

    changeColor() {
        this.setState((prevState, props) => {
            return {
                color: props.backColor,
                isUsed: true
            }
        })
    }

    render() {
        let cssObj = {
            width: "100px",
            border: "1px solid green",
            padding: "1px",
            margin: "1px",
            height: "100px",
        }
        cssObj.backgroundColor = this.state.color
        return (
            <button style={cssObj} onClick={() => {
                if (!this.state.isUsed) {
                    this.changeColor()
                    this.props.onClick();
                }
            }
            }>
            </button>
        )
    }
}

export default Box;