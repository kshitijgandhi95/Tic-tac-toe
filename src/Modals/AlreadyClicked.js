import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

class ShowClickedModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.closeClickedModal} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>This Box is already clicked</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeClickedModal}>
                        Close
          </Button>

                </Modal.Footer>
            </Modal>
        );
    }
}

export default ShowClickedModal;