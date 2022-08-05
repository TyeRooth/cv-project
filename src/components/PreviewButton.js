import React, { Component } from "react";

class PreviewButton extends Component {
    constructor (props) {
        super(props);

        this.changeToPreview = this.props.func;
    };

    render () {
        return (
            <button type="button" onClick={this.changeToPreview}>Preview CV</button>
        )
    }
}

export default PreviewButton;