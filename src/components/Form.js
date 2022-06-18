import React, { Component } from 'react';
import Fieldset from "./FieldSet";

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { personal } = this.props.data;
        return (
            <form>
                <Fieldset section={personal}/>
            </form>
        )
    }
}

export default Form;