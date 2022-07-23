import React, { Component } from 'react';
import Heading from "./Heading";
import EduExpGroup from "./EduExpGroup";
import EduExpButton from "./EduExpButton";

class FieldSet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const section = this.props.section;
        let catSet = new Set();
        let instances = [];

        // Determine the total number of different experiences/educations
        for (let i = 0; i < section.length; i++) {
            catSet.add(section[i].catID);
        }

        //Create an array for each case
        for (let id of catSet) {
            instances.push(section.filter(group => group.catID === id));
        }

        // Create a list containing each category group
        let groups = instances.map(group => {
            return (<EduExpGroup group={group} key={group[0].catID}/>)
        })

        if (section[0].category === 'Personal Information') {
            return (
                <fieldset>
                    <Heading heading={section[0].category}/>
                    <div>{groups}</div>
                </fieldset>
            )
        }
        else {
            return (
                <fieldset>
                    <Heading heading={section[0].category}/>
                    <div>{groups}</div>
                    <EduExpButton name="Add" func={this.props.add}/>
                </fieldset>
            )
        }
    }
}

export default FieldSet;