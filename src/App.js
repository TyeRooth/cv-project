import React from "react";
import uniqid from 'uniqid';
import Form from "./components/Form";

class App extends React.Component {
  constructor () {
    super();

    this.addExpGroup = this.addExpGroup.bind(this);
    this.addEduGroup = this.addEduGroup.bind(this);

    this.state = {
      submitted: false,
      data: details,
    }
  }
  
  render() {
    const buttonFuncs = {
      addEdu: this.addEduGroup,
      addExp: this.addExpGroup,
    }

    return (
      <Form data={this.state.data} funcs={buttonFuncs}/>
    )
  }

  addExpGroup() {
    const groupID = uniqid();
    const fields = ["Company Name", "Position Title", "Tasks and Responsibilities", "Date From", "Date To"];
    let newFields = [];
    for (let i = 0; i < fields.length; i++) {
      newFields.push({
        category: 'Experience',
        label: fields[i],
        value: '',
        id: uniqid(),
        catID: groupID,
      })
    }
    this.setState({
      data: this.state.data.concat(newFields),
    })
  };

  addEduGroup() {
    const groupID = uniqid();
    const fields = ["Institution Name", "Subject of Study", "Start Year", "End Year"];
    let newFields = [];
    for (let i = 0; i < fields.length; i++) {
      newFields.push({
        category: 'Education',
        label: fields[i],
        value: '',
        id: uniqid(),
        catID: groupID,
      })
    }
    this.setState({
      data: this.state.data.concat(newFields)
    })
  }  
};

// The rest of the code goes into the initial data and form display
// These are needed to separate different education and experiences fieldsets.
const initPersonalID = uniqid('personal');
const initEducationID = uniqid('education');
const initExperienceID = uniqid('experience');

let details = [
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
]

export default App;
