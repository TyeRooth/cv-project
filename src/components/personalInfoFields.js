import React, { Component } from 'react';
import Input from './Input';

class PersonalInfoFieldset extends Component {
    constructor(props) {
        super(props);

        this.changeValue = this.props.changeValue;
    };

    render() {
        const personalData = this.props.group;

        let fields = personalData.map(field => {
            return (<Input label={field.label} key={field.id} id={field.id} changeValue={this.changeValue}/>)
        });

        return (
            <fieldset>
                <div>{fields}</div>
            </fieldset>
        )
    }
}

export default PersonalInfoFieldset;