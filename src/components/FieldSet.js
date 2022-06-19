import React, { Component } from 'react';
import Heading from "./Heading";
import Input from "./Input";

class FieldSet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const section = this.props.section;

        let fields = section.map(field => {
            return (<Input label={field.label} key={field.id}/>)
        })
        return (
            <fieldset>
                <Heading heading={section[0].category}/>
                <div>{fields}</div>
            </fieldset>
        )
    }
}

export default FieldSet;