import React from "react";

export default class Clock extends React.Component {    

    toHHMMSS(time) {
        let sec_num = parseInt(time, 10); // don't forget the second param
        let hours   = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) { hours   = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        
        return hours + ':' + minutes + ':' + seconds;
    }

    render() {
        const {time} = this.props;
        return(            
            <div className="grid-container">
                <div className="grid-x grid-padding-x align-center text-center">
                    <div className="cell small-8 large-6">    
                        <div className="clock">
                            <h1>{this.toHHMMSS(time)}</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}