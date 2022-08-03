import React, { Component } from 'react';
import Heading from "./Heading";
import EduExpGroup from "./EduExpGroup";
import EduExpButton from "./EduExpButton";
import PersonalInfoGroup from "./personalInfoFields";

class FieldSet extends Component {
    constructor(props) {
        super(props);

        this.changeValue = this.props.changeValue;
    }

    render() {
        let section = this.props.section;
        let catSet = new Set();
        let instances = [];

        // Deals with 0 Edu or Exp groups
        const heading = section[0].category;
        if (section.length === 1) {
            section = [];
        }

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
            return (<EduExpGroup group={group} key={group[0].catID} deleteFunc={this.props.delete} changeValue={this.changeValue}/>)
        })

        // Create list for personal information group without delete button
        let personalInfo = <PersonalInfoGroup group={section} changeValue={this.changeValue}/>

        if (heading === 'Personal Information') {
            return (
                <fieldset>
                    <Heading heading={heading}/>
                    <div>{personalInfo}</div>
                </fieldset>
            )
        }
        else {
            return (
                <fieldset>
                    <Heading heading={heading}/>
                    <div>{groups}</div>
                    <EduExpButton name="Add" func={this.props.add}/>
                </fieldset>
            )
        }
    }
}

export default FieldSet;