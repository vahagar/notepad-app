import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import NotePadList from './components/NotePadList/NotePadList';
import NotePadItem from './components/NotePadList/NotePadItem/NotePadItem';

import './App.css';

export default function App() {
    // process.env.PUBLIC_URL
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className='h1'>Notepad Application</div>
            <div className='content-container'>
                <Switch>
                    <Route exact path='/create' component={NotePadItem}/>
                    <Route exact path='/:id' component={NotePadItem}/>
                    <Route exact path='/' component={NotePadList}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

