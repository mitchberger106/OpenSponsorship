import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

import ItemForm from "./ItemForm";

const Basic = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  const { next } = navigation;

  return (
    <Form>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" />
  </Form.Group>

  <Form.Group controlId="formBasicSport">
    <Form.Label>Sport</Form.Label>
    <Form.Control type="sport" placeholder="Select Sport" />
  </Form.Group>

  <Form.Group controlId="formBasicGender">
    <Form.Label>Gender</Form.Label>
    <Form.Control as="select">
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="formBasicDateOfBirth">
    <Form.Label>Name</Form.Label>
    <Form.Control type="dateOfBirth" placeholder="Enter date of birth" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Next
  </Button>
</Form>
  );
};

export default Basic;