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
    <Form.Control onChange = {setForm} value={name} name="name" placeholder="Enter name" />
  </Form.Group>

  <Form.Group controlId="formBasicSport">
    <Form.Label>Sport</Form.Label>
    <Form.Control onChange = {setForm} value={sport} name="sport" placeholder="Select Sport" />
  </Form.Group>

  <Form.Group controlId="formBasicGender">
    <Form.Label>Gender</Form.Label>
    <Form.Control name="gender" value={gender} onChange = {setForm} as="select">
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="formBasicDateOfBirth">
    <Form.Label>Date of birth</Form.Label>
    <Form.Control onChange = {setForm} value={dateOfBirth} name="dateOfBirth" placeholder="Enter date of birth" />
  </Form.Group>
  <Button className='float-right' onClick={next} variant="primary" type="submit">
    Next
  </Button>
</Form>
  );
};

export default Basic;