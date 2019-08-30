import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Routes from '../../../constants/routes';

import Home from './screens/Home';

import structure from '~constants/structure';

function Dashboard() {
  const routes = structure.map(model => model.endpoint);
  return (
    <Switch>
      {routes.map(route => (
        <Route key={route} path={`/${route}`} component={Home} />
      ))}
      <Route exact path={Routes.HOME} component={Home} />
      <Route component={<Redirect to={Routes.HOME} />} />
    </Switch>
  );
}

export default Dashboard;
