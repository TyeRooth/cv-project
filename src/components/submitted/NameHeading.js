import React, { Component } from "react";

class NameHeading extends Component {
    constructor (props) {
        super(props);

        this.fName = this.props.fName;
        this.lName = this.props.lName;
    };

    render () {
        return (
            <h1>{this.fName + " " + this.lName}</h1>
        )
    };
};

export default NameHeading;