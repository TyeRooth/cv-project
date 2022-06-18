import React, { Component } from 'react';
import Heading from "./Heading";
import Input from "./Input";

class FieldSet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { fields } = this.props.section;

        let inputs = fields.map(input => {
            return (<Input label={input.label} key={input.key}/>)
        })
        return (
            <fieldset>
                <Heading heading={this.props.heading}/>
                <div>{inputs}</div>
            </fieldset>
        )
    }
}

export default FieldSet;