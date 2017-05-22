import React from "react";

export default class Search extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            search: ""
        }
    }

    onChange(e) {
        const searchText = e.target.value;
        this.setState({search: searchText });
    }

    render() {
        return(
            <div className="search">
                <i className="fa fa-search"></i>
                <input type="text" name="search" placeholder="Search" onChange={this.onChange.bind(this)} value={this.state.searchtext} />
            </div>
        );
    }
}