import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap'
import Basic from "./Basic";
import About from "./About";
import Summary from "./Summary";
import { useForm, useStep } from "react-hooks-helper";

const ModalMain = (props) => {

  const steps = [
    { id: "basic" },
    { id: "about" },
    { id: "summary" },
  ];

  const [formData, setForm] = useForm(null);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const propsToPass = { formData, setForm, navigation };

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
            Add Athlete Information
          </Modal.Title>
        </Modal.Header>
        {id == "basic" &&
        <Modal.Body>
          <Basic {...propsToPass} />
        </Modal.Body>
        }
        {id == "summary" &&
        <Modal.Body>
          <Summary {...propsToPass} />
        </Modal.Body>
        }
        {id == "about" &&
        <Modal.Body>
          <About {...propsToPass} />
        </Modal.Body>
        }
      </Modal>
      </div>
    );
}

export default ModalMain;