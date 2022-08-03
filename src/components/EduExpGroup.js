import React, { Component } from 'react';
import EduExpButton from './EduExpButton';
import Input from './Input';

class EduExpGroup extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const group = this.props.group;

        // The inputs for each individual experience and education are laid out in thiis list
        let fields = group.map(field => {
            return (<Input label={field.label} key={field.id}/>)
        })
        return (
            <fieldset>
                <div>{fields}</div>
                <EduExpButton name="Delete" deleteFunc={this.props.deleteFunc} catID={group[0].catID}/>
            </fieldset>
        )
    };
}

export default EduExpGroup;