import React, { Component } from 'react';

class EduExpButton extends Component {
    constructor(props) {
        super(props);
    };

    render () {
        //Add
        if (this.props.deleteFunc === undefined) {
            return (
                <button type='button' onClick={this.props.func}>{this.props.name}</button>
            );
        }

        //Delete
        else {
            return (
                <button type='button' onClick={() => this.props.deleteFunc(this.props.catID)}>{this.props.name}</button>
            )
        }
    }
}

export default EduExpButton;