import React, { Component } from "react";

class Repo extends Component {
    render() {
        return (
            <div>
                <a href={this.props.url}>{this.props.name}</a>
            </div>
        );
    }
}

export default Repo;
