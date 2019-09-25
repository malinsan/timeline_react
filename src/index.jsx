import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route} from 'react-router-dom'
import { Layout } from './layout'

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route route='/' component={Layout} />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <Root />, 
    document.getElementById('root')
);