import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input onChange={(e) => this.props.changeValue(e.target.value, this.props.id)}></input>
            </div>
        )
    }
}

export default Input;