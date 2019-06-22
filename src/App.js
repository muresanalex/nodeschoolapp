import React, { Component } from "react";
import Header from "./header.js";
import Content from "./content.js";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
    state = {
        header: "I am the header"
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header text={this.state.header} />
                    <Route path="/" component={Content} />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
