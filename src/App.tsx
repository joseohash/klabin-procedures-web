import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';
import Subareas from './pages/Subareas';
import Procedures from './pages/Procedures';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/dashboard" component={Subareas} />
          <Route path="/procedures" component={Procedures} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
