import React, { Component } from "react";
import uniqid from "uniqid";
import EduItem from "./EduItem";
import ExpItem from "./ExpItem";

class PreviewSection extends Component {
    constructor(props) {
        super(props)

        this.data = this.props.data;
    };

    render () {
        // Catch no items
        if(this.data.length === 0) {
            return null;
        }

        let totalItems = new Set();
        let filteredItems = [];
        for (let i = 0; i < this.data.length; i++) {
            totalItems.add(this.data[i].catID);
        };
        for (let catID of totalItems) {
            filteredItems.push(this.data.filter(info => info.catID === catID));
        }
        if (this.data[0].category === "Education") {
            const items = filteredItems.map(item => {
                return <EduItem info={item} key={uniqid()}/>
            });
            return (
                <div>{items}</div>
            );
        }
        else if (this.data[0].category === "Experience") {
            const items = filteredItems.map(item => {
                return <ExpItem info={item} key={uniqid()}/>
            });
            return (
                <div>{items}</div>
            );
        }
    };
}

export default PreviewSection;