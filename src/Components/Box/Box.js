import React, { Component } from 'react'

class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: "blue"
        }
    }

    changeColor() {
        this.setState((prevState, props) => {
            return {
                color: this.props.backColor
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
                this.changeColor()
                // this.props.onClick();
            }
            }>
            </button>
        )
    }
}

export default Box;