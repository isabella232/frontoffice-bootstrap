import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Routes from '../../../constants/routes';

import structure from '~constants/structure';

const List = lazy(() => import('./screens/List'));
const Detail = lazy(() => import('./screens/Detail'));
const Create = lazy(() => import('./screens/Create'));
const Edit = lazy(() => import('./screens/Edit'));

const routes = structure.map(model => model.endpoint);
function Dashboard() {
  return (
    <Switch>
      {routes.map(route => (
        <>
          <Route key={`${route}-list`} exact path={`/${route}`} component={List} />
          <Route key={`${route}-create`} exact path={`/${route}/new`} component={Create} />
          <Route key={`${route}-detail`} path={`/${route}/:id`} component={Detail} />
          <Route key={`${route}-edit`} exact path={`/${route}/:id/edit`} component={Edit} />
        </>
      ))}
      <Route exact path={Routes.HOME} component={List} />
      <Route component={<Redirect to={Routes.HOME} />} />
    </Switch>
  );
}

export default Dashboard;
