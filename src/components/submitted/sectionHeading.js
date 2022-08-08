import React, { Component } from "react";

class SectionHeading extends Component {
    constructor(props) {
        super(props)

        this.heading = this.props.heading;
    }

    render () {
        return (
            <h3>{this.heading}</h3>
        )
    }
}

export default SectionHeading;