import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { AgGridReact } from 'ag-grid-react';
import profileService from "./services/profileService";
import ProfileList from "./ProfileList";
import { Modal } from 'react-bootstrap'

const ModalMain = (props) => {

    return(
        <div>
      <Modal
        size="lg"
        show={props.show}
        onHide={props.closeModal}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
      </div>
    );
}

export default ModalMain;