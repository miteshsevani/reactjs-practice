import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import PropTypes from 'prop-types'; 

export default class Error extends React.Component {
    componentDidMount() {
        
        const {eMessage, eTitle} = this.props;
        const modalMarkUp = (
            <div className="reveal tiny text-center" id="errorModal" data-reveal="">
                <h4>{eTitle}</h4>
                <p>{eMessage}</p>
                <button className="button hollow" data-close="" aria-label="Close modal" type="button">
                    Okay
                </button>
            </div>
        )

        const $modal = $(ReactDOMServer.renderToString(modalMarkUp));
        $(ReactDOM.findDOMNode(this)).html($modal);

        const modal = new Foundation.Reveal($('#errorModal'));
        modal.open();
    }

    render() {        
        return(
            <div>
            </div>
        )
    }
}

Error.defaultProps = {
  eTitle: "Error"
};

Error.propTypes = {
  eTitle: PropTypes.string.isRequired
}