import React, { Component } from 'react';
import Heading from "./Heading";
import Input from "./Input";

class FieldSet extends Component {
    render() {
        return (
            <fieldset>
                <Heading heading="Personal Information"/>
                <Input label="First Name"/>
            </fieldset>
        )
    }
}

export default FieldSet;