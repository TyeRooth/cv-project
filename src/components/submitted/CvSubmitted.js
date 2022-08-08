import React, {Component} from "react";
import NameHeading from "./NameHeading";
import PersonalInfoItem from "./PersonalInfoItem";
import SectionHeading from "./sectionHeading";
import PreviewSection from "./previewSection";
import EditCVButton from "./editCVButton";

class ProducedCV extends Component {
    constructor (props) {
        super(props);

        this.changeToForm = this.props.func;
        this.data = this.props.data;
    }

    render () {
        const personalInfo = this.parsePersonalInformation();      
        return (
            <div>
                <NameHeading fName={personalInfo.fName} lName={personalInfo.lName}/>
                <PersonalInfoItem info={personalInfo.phone}/>
                <PersonalInfoItem info={personalInfo.email}/>
                <SectionHeading heading={"Education"}/>
                <PreviewSection data={this.data.filter(field => field.category === "Education")}/>
                <SectionHeading heading={"Experience"}/>
                <PreviewSection data={this.data.filter(field => field.category === "Experience")}/>
                <EditCVButton func={this.changeToForm}/>
            </div>
        )
    }

    parsePersonalInformation () {
        function getFieldValue (info) {
            return info.label === this ? true : false;
        };
        return {
            fName: this.data.filter(getFieldValue, "First Name")[0].value,
            lName: this.data.filter(getFieldValue, "Last Name")[0].value,
            phone: this.data.filter(getFieldValue, "Phone Number")[0].value,
            email: this.data.filter(getFieldValue, "Email Address")[0].value,
        }
    }
}

export default ProducedCV;