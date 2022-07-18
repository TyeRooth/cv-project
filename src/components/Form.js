import React, { Component } from 'react';
import Fieldset from "./FieldSet";

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const data = this.props.data;
        const personal = data.filter(field => field.category === 'Personal Information');
        const education = data.filter(field => field.category === 'Education');
        const experience = data.filter(field => field.category === 'Experience');
        
        return (
            <form>
                <Fieldset section={personal}/>
                <Fieldset section={education}/>
                <Fieldset section={experience}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;