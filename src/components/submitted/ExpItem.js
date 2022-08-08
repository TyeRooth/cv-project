import React, { Component } from "react";

class ExpItem extends Component {
    constructor (props) {
        super(props);

        this.item = this.props.info;
    }

    render () {
        const exp = this.parseExperienceData();
        const string = exp.position + ", " + exp.company + ", " + exp.start + "-" + exp.end;
        return (
            <div>
                <div>{string}</div>
                <div>{exp.tasks}</div>
            </div>
        )
    };

    parseExperienceData () {
        function getField (info) {
            return info.label === this ? true : false;
        };
        return {
            company: this.item.filter(getField, "Company Name")[0].value,
            position: this.item.filter(getField, "Position Title")[0].value,
            tasks: this.item.filter(getField, "Tasks and Responsibilities")[0].value,
            start: this.item.filter(getField, "Date From")[0].value,
            end: this.item.filter(getField, "Date To")[0].value,
        }
    }
}

export default ExpItem;