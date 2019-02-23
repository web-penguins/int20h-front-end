import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';

const signedInRoutes: React.Component[] = [
  // <Route path="/" exact component={Products} />
];

const signedOutRoutes = [
  <Route path="/login" exact component={Login} />,
  // <Route path="/register" exact component={Register} />,
  <Route path="/" render={() => <Redirect to={{ pathname: '/login' }} />} />,
];

const App: React.FC<{ authorized: boolean }> = ({ authorized }) => (
  <div className="app">
    <Header />
    <BrowserRouter>
      <Switch>{authorized ? signedInRoutes : signedOutRoutes}</Switch>
    </BrowserRouter>
  </div>
);

App.defaultProps = {
  authorized: false,
};

export default App;
