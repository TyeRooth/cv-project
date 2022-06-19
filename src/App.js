import React from "react";
import uniqid from 'uniqid';
import Form from "./components/Form";

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      submitted: false,

      data: {
        personal: {
          heading: "Personal Information",
          fields: [
            {
              key: 0,
              label: "First Name",
              value: ""
            },
            {
              key: 1,
              label: "Last Name",
              value: ""
            },
            {
              key: 2,
              label: "Phone Number",
              value: ""
            },
            {
              key: 3,
              label: "Email Address",
              value: ""
            }
          ]
        },
      }
    }
  }

  render() {
    return (
      <Form data={details}/>
    )
  }
};

const initPersonalID = uniqid('personal');
const initEducationID = uniqid('education');
const initExperienceID = uniqid('experience');

const details = [
  {
    category: 'Personal Information',
    label: 'First Name',
    value: '',
    id: uniqid(),
    catID: initPersonalID,
  },
  {
    category: 'Personal Information',
    label: 'Last Name',
    value: '',
    id: uniqid(),
    catID: initPersonalID,
  },
  {
    category: 'Personal Information',
    label: 'Phone Number',
    value: '',
    id: uniqid(),
    catID: initPersonalID,
  },
  {
    category: 'Personal Information',
    label: 'Email Address',
    value: '',
    id: uniqid(),
    catID: initPersonalID,
  }
]

export default App;
