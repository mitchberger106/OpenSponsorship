import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const About = ({ setForm, formData, navigation }) => {
  const { location, team, description } = formData;

  const { previous, next } = navigation;

  return (
    <Form>
  <Form.Group controlId="formAboutLocation">
    <Form.Label>Location</Form.Label>
    <Form.Control onChange={setForm} value={location} name="location" placeholder="Enter location" />
  </Form.Group>

  <Form.Group controlId="formAboutTeam">
    <Form.Label>Team</Form.Label>
    <Form.Control onChange={setForm} value={team} name="team" placeholder="Enter team" />
  </Form.Group>

  <Form.Group controlId="formAboutDescription">
    <Form.Label>Description</Form.Label>
    <Form.Control onChange={setForm} value={description} name="description" placeholder="Enter description" />
  </Form.Group>
  <Button className='float-left' onClick={previous} variant="primary" type="submit">
    Previous
  </Button>
  <Button className='float-right' onClick={next} variant="primary" type="submit">
    Next
  </Button>
</Form>
  );
};

export default About;