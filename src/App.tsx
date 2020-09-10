import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import PermanentDrawerLeft from './components/PermanentDrawerLeft';

import SignIn from './pages/SignIn';
import Subareas from './pages/Dashboard';
import Procedures from './pages/Procedures';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <PermanentDrawerLeft />
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/dashboard" component={Subareas} />
          <Route path="/procedures/:subarea_id+" component={Procedures} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
