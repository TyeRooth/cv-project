import React, { Component } from 'react';
import Fieldset from "./FieldSet";

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const data = this.props.data;
        const personal = data.filter(field => field.category = 'Personal Information');
        return (
            <form>
                <Fieldset section={personal}/>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form;