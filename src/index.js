import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router,Route} from "react-router-dom";
import store from "./store"
import {Provider} from "react-redux"
import {noLayoutRouter} from "@router"
import routerEach from "@utils/routerEach"
let RouteComponent = routerEach(noLayoutRouter)
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route path="/" component={App}/>
            {RouteComponent}
        </Provider>
    </Router>
    , document.getElementById('root'));

