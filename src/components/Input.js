import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input></input>
            </div>
        )
    }
}

export default Input;