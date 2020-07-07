import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

class StartGameModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.closeStartModal} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Press Start to play</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeStartModal}>
                        Close
          </Button>

                </Modal.Footer>
            </Modal>
        );
    }
}

export default StartGameModal;