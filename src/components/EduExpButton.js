import React, { Component } from 'react';

class EduExpButton extends Component {
    constructor(props) {
        super(props);
    };

    render () {
        return (
            <button type="button" onClick={this.props.func}>{this.props.name}</button>
        );
    }
}

export default EduExpButton;