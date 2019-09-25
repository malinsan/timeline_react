import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route} from 'react-router-dom'
import { EVLLayout } from './layout'

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route route='/' component={EVLLayout} />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(
    <Root />, 
    document.getElementById('root')
);