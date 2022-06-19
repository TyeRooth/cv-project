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

// These are needed to separate different education and experiences fieldsets.
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
  },
  {
    category: 'Education',
    label: 'Institution Name',
    value: '',
    id: uniqid(),
    catID: initEducationID,
  },
  {
    category: 'Education',
    label: 'Subject of Study',
    value: '',
    id: uniqid(),
    catID: initEducationID,
  },
  {
    category: 'Education',
    label: 'Start Year',
    value: '',
    id: uniqid(),
    catID: initEducationID,
  },
  {
    category: 'Education',
    label: 'End Year',
    value: '',
    id: uniqid(),
    catID: initEducationID,
  },
  {
    category: 'Experience',
    label: 'Company Name',
    value: '',
    id: uniqid(),
    catID: initExperienceID,
  },
  {
    category: 'Experience',
    label: 'Position Title',
    value: '',
    id: uniqid(),
    catID: initExperienceID,
  },
  {
    category: 'Experience',
    label: 'Tasks and Responsibilities',
    value: '',
    id: uniqid(),
    catID: initExperienceID,
  },
  {
    category: 'Experience',
    label: 'Date From',
    value: '',
    id: uniqid(),
    catID: initExperienceID,
  },
  {
    category: 'Experience',
    label: 'Date To',
    value: '',
    id: uniqid(),
    catID: initExperienceID,
  },
  // Testing whether multiple groups can be made for later
  {
    category: 'Experience',
    label: 'Test',
    value: '',
    id: uniqid(),
    catID: 1,
  }
]

export default App;
