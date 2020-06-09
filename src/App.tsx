import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
