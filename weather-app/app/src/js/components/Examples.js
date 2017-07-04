import React from "react";
import { Link } from 'react-router-dom';

const Examples = (props) => {
    return(
        <div className="grid-container">
            <div className="grid-x grid-padding-x align-center">
                <div className="cell small-8 large-6">
                    <h2 className="page-title">Examples</h2>
                    <ol>
                        <li><Link to="/?city=London">London</Link></li>
                        <li><Link to="/?city=Manchester">Manchester</Link></li>
                        <li><Link to="/?city=Birmingham">Birmingham</Link></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

module.exports = Examples;