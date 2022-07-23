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
        
        return (
            <form>
                <Fieldset section={personal}/>
                <Fieldset section={education} add={this.funcs.addEdu}/>
                <Fieldset section={experience} add={this.funcs.addExp}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;