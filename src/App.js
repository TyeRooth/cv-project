import React from "react";
import uniqid from 'uniqid';
import Form from "./components/Form";
import ProducedCV from "./components/submitted/CvSubmitted";

class App extends React.Component {
  constructor () {
    super();

    this.addExpGroup = this.addExpGroup.bind(this);
    this.addEduGroup = this.addEduGroup.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
    this.changeValueEvent = this.changeValueEvent.bind(this);
    this.changeToForm = this.changeToForm.bind(this);
    this.changeToPreview = this.changeToPreview.bind(this);

    this.state = {
      submitted: false,
      data: details,
    }
  }
  
  render() {
    const buttonFuncs = {
      addEdu: this.addEduGroup,
      addExp: this.addExpGroup,
      delete: this.deleteGroup,
      changeValue: this.changeValueEvent,
      preview: this.changeToPreview,
    }

    if (this.state.submitted === false) {
      return (
        <Form data={this.state.data} funcs={buttonFuncs}/>
      )
    }
    else {
      return (
        <ProducedCV func={this.changeToForm}/>
      )
    }
  }

  changeToPreview () {
    this.setState({submitted: true});
  };

  changeToForm () {
    this.setState({submitted: false});
  };

  changeValueEvent (newValue, id) {
    let updatedData = this.state.data.map(field => {
      if (field.id === id) {
        field.value = newValue;
      }
      return field;
    });
    this.setState({
      data: updatedData
    });
  };

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
  };
  
  deleteGroup(catID) {
    function notInGroupDeleted (group) {
      return group.catID === catID ? false : true;
    }
    const deleted = this.state.data.filter(notInGroupDeleted);
    this.setState({
      data: deleted
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
