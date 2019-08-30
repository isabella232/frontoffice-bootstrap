import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Routes from '../../../constants/routes';

import structure from '~constants/structure';

import Sidebar from '~components/Sidebar';

const List = lazy(() => import('./screens/List'));
const Detail = lazy(() => import('./screens/Detail'));
const Create = lazy(() => import('./screens/Create'));
const Edit = lazy(() => import('./screens/Edit'));

const GenericRouter = () =>
  structure.map(model => (
    <>
      <Route key={`${model.endpoint}list`} exact path={`/${model.endpoint}`} component={List} />
      <Route key={`${model.endpoint}create`} exact path={`/${model.endpoint}/new`} component={Create} />
      <Route key={`${model.endpoint}detail`} path={`/${model.endpoint}/:id`} component={Detail} />
      <Route key={`${model.endpoint}edit`} exact path={`/${model.endpoint}/:id/edit`} component={Edit} />
    </>
  ));

function Dashboard() {
  return (
    <div className="row">
      <Sidebar />
      <Switch>
        <GenericRouter />
        <Route exact path={Routes.HOME} component={List} />
        <Route component={<Redirect to={Routes.HOME} />} />
      </Switch>
    </div>
  );
}

export default Dashboard;
