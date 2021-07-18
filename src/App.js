import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Switch, Route, Redirect} from 'react-router-dom';

import NotePadList from './components/NotePadList/NotePadList';
import NotePadItem from './components/NotePadList/NotePadItem/NotePadItem';

import './App.css';

export default function App() {
    return (
        <BrowserRouter basename="/notepad-app">
            <div className='h1'>Notepad Application</div>
            <div className='content-container'>
                <Switch>
                    <Route path='/create' component={NotePadItem}/>
                    <Route path='/:id' component={NotePadItem}/>
                    <Route path='/' component={NotePadList}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

