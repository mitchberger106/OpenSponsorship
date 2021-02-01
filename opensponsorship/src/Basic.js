import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const Basic = ({ setForm, formData, navigation }) => {
  const { name, sport, gender, dateOfBirth } = formData;

  const { next } = navigation;

  return (
    <Form>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control value={name} type="name" placeholder="Enter name" />
  </Form.Group>

  <Form.Group controlId="formBasicSport">
    <Form.Label>Sport</Form.Label>
    <Form.Control value={sport} type="sport" placeholder="Select Sport" />
  </Form.Group>

  <Form.Group controlId="formBasicGender">
    <Form.Label>Gender</Form.Label>
    <Form.Control value={gender} as="select">
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="formBasicDateOfBirth">
    <Form.Label>Date of birth</Form.Label>
    <Form.Control value={dateOfBirth} type="dateOfBirth" placeholder="Enter date of birth" />
  </Form.Group>
  <Button onClick={next} variant="primary" type="submit">
    Next
  </Button>
</Form>
  );
};

export default Basic;