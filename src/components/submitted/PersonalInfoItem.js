import React, { Component } from "react";

class PersonalInfoItem extends Component {
    constructor (props) {
        super(props);

        this.info = this.props.info;
    };

    render () {
        return (
            <p>{this.info}</p>
        )
    };
}

export default PersonalInfoItem;