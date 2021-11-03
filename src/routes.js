import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';

import App from './App';
import Sobre from './Sobre'

const routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route component={ App } path="/" exact/>
        <Route component={ Sobre } path="/sobre" />
      </Switch>
    </BrowserRouter>
  )
}

export default routes;