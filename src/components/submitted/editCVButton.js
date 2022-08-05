import React, { Component } from "react";

class EditCVButton extends Component {
    constructor(props) {
        super(props);

        this.changeToForm = this.props.func;
    };

    render () {
        return (
            <button type="button" onClick={this.changeToForm}>Edit CV</button>
        )
    }
}

export default EditCVButton;