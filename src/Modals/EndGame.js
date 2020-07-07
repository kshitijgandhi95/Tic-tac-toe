import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

class EndGameModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.closeEndModal} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Game Finished</Modal.Title>
                </Modal.Header>
        <Modal.Body>{this.props.winner}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeEndModal}>
                        Close
          </Button>

                </Modal.Footer>
            </Modal>
        );
    }
}

export default EndGameModal;