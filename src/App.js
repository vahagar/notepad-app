import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Switch, Route, Redirect} from 'react-router-dom'

import './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/:id' component={NotePadItem}/>
                <Route path='/' component={NotePadList}/>
                <Redirect to='/'/>
            </Switch>
        </BrowserRouter>
    );
}

function NotePadList() {
    return (
        <h2> NotePad List Component </h2>
    )
}

function NotePadItem() {
    return (
        <h2> NotePad Item Component </h2>
    )
}
