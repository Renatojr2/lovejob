import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



import Profile from './pages/Profile';
import Vagas from './pages/Vagas';


export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Profile} />
            <Route path="/vagas" component={Vagas}/>
        </Switch>
    </BrowserRouter>
  );
}
