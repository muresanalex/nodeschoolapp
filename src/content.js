import React, { Component } from "react";
import Repositories from "./repositories";
import Repo from "./repo";

class Content extends Component {
    mapRepos = (currentItem, index) => {
        return (
            <Repo
                url={currentItem.html_url}
                name={currentItem.name}
                key={index}
            />
        );
    };

    render() {
        const repos = Repositories.map(this.mapRepos);
        return <div>{repos}</div>;
    }
}

export default Content;
