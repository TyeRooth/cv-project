import React, { Component } from "react";

class EduItem extends Component {
    constructor(props) {
        super(props);

        this.item = this.props.info;
    }

    render () {
        const edu = this.parseEducationData();
        const string = edu.institution + ", " + edu.subject + ", " + edu.start + "-" + edu.end;
        return (
            <div>{string}</div>
        )
    }

    parseEducationData () {
        function getField (info) {
            return info.label === this ? true : false;
        };
        return {
            institution: this.item.filter(getField, "Institution Name")[0].value,
            subject: this.item.filter(getField, "Subject of Study")[0].value,
            start: this.item.filter(getField, "Start Year")[0].value,
            end: this.item.filter(getField, "End Year")[0].value,
        }
    }
}

export default EduItem;