import React from "react";
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
        }
      }
    }
  }

  render() {
    return (
      <Form data={this.state.data}/>
    )
  }
}

export default App;
