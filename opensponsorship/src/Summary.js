import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { form } from "react-dom-factories";

const Summary = ({ setForm, formData, navigation }) => {
  const {
    name,
    sport,
    gender,
    dateOfBirth,
    location,
    team,
    description
  } = formData;
  const { go } = navigation;

  const submit = (formData) => {
      console.log(formData);
  }

  return (
    <div className="form">
      <h3>Review your data</h3>
      <h4>
        Basic Info:
        <Button onClick={() => go("basic")}>Edit</Button>
      </h4>
      <div>
        {" "}
        Name: {`${name}`},
        <br />
        Sport: {`${sport}`},
        <br />
        <div>Gender: {`${gender}`}</div>
        <br />
        <div>Date of birth: {`${dateOfBirth}`}</div>
      </div>
      <h4>
        About athlete:
        <Button onClick={() => go("about")}>Edit</Button>
      </h4>
      <div>
        Location: {`${location}`},
        <br />
        Team: {` ${team}`},
        <br />
        Description: {`${description}`},
      </div>
      <div>
        <Button className='float-right' onClick={() => {submit(formData); go("basic")}}>Submit</Button>
      </div>
    </div>
  );
};

export default Summary;