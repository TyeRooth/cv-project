import React, { Component } from 'react';
import Fieldset from "./FieldSet";

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.funcs = this.props.funcs
    }

    render () {
        const data = this.props.data;
        const personal = data.filter(field => field.category === 'Personal Information');
        const education = data.filter(field => field.category === 'Education');
        const experience = data.filter(field => field.category === 'Experience');

        //This function is important for upkeeping the program when there are no groups for a section
        if (education[0] === undefined) {
            education[0] = {category: 'Education'};
        }
        if (experience[0] === undefined) {
            experience[0] = {category: 'Experience'};
        }
        
        return (
            <form>
                <Fieldset section={personal}/>
                <Fieldset section={education} add={this.funcs.addEdu} delete={this.funcs.delete}/>
                <Fieldset section={experience} add={this.funcs.addExp} delete={this.funcs.delete}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;