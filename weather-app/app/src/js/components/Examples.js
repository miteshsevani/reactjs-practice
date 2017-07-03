import React from "react";
import { Link } from 'react-router-dom';

const Examples = (props) => {
    return(
        <div className="grid-container grid-container-padded">
                <div className="grid-x grid-padding-x">
                    <div className="cell small-12 large-6">
                        <h2>Examples</h2>
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