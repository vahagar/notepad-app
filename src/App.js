import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Switch, Route, Redirect} from 'react-router-dom';

import NotePadList from './components/NotePadList/NotePadList';
import NotePadItem from './components/NotePadList/NotePadItem/NotePadItem';

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

