import React, {Component} from "react";
import NameHeading from "./NameHeading";
import EditCVButton from "./editCVButton";

class ProducedCV extends Component {
    constructor (props) {
        super(props);

        this.changeToForm = this.props.func;
    }

    render () {
        return (
            <div>
                <NameHeading/>
                <EditCVButton func={this.changeToForm}/>
            </div>
        )
    }
}

export default ProducedCV;