import React from 'react';
import { Header } from 'components';
import { Switch, Route } from 'react-router-dom';
import { Home, Repos, Commits } from 'pages';

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path={`/:user/repo`} component={Repos}></Route>
        <Route exact path="/:user/:repo/commits" component={Commits}></Route>
      </Switch>
    </div>
  );
};

export default DefaultLayout;
