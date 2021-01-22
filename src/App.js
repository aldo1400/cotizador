import React, { useState } from 'react';
import Layout from 'components/Layout';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from 'routes'

import './styles/reset.scss';

import UserContext from './UserContext'

function App() {
  const [user, setUser] = useState({

  });

  return (
    <UserContext.Provider value={[user, setUser]} >
      <Router>
        <Layout>
          <Switch >
            {routes.map((route) => <Route exact path={route.path} component={route.component} />)}
          </Switch>
        </Layout>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
