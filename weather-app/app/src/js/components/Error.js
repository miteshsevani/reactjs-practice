import React from "react";

export default class Error extends React.Component {
    componentDidMount() {
        const modal = new Foundation.Reveal($('#errorModal'));
        modal.open();
    }

    render() {
        return(
            <div className="reveal tiny text-center" id="errorModal" data-reveal="">
                <h4>Error</h4>
                <p>Error Message</p>                
                <button className="button hollow" data-close="" aria-label="Close modal" type="button">
                    Okay
                </button>
            </div>
        )
    }
}