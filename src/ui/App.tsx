import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AppState } from '../store/reducers';
import Header from './components/Header';
import Login from './pages/Login';
import Product from './pages/Product';
import Profile from './pages/Profile';
import Search from './pages/Search';

const signedInRoutes = [
  // <Route path="/" exact component={Products} />
  <Route path="/search" exact component={Search} key="route-search" />,
  <Route path="/profile" exact component={Profile} key="route-profile" />,
  <Route
    path="/product/:productId"
    exact
    component={Product}
    key="route-product"
  />,
  <Route
    path="/"
    render={() => <Redirect to={{ pathname: '/profile' }} />}
    key="route-redirect-signed"
  />,
];

const signedOutRoutes = [
  <Route path="/login" exact component={Login} key="route-login" />,
  <Route
    path="/"
    render={() => <Redirect to={{ pathname: '/login' }} />}
    key="route-redirect"
  />,
];

const App: React.FC<{ authorized: boolean }> = ({ authorized }) => (
  <div className="app">
    <BrowserRouter>
      <>
        <Header />
        <Switch>{authorized ? signedInRoutes : signedOutRoutes}</Switch>
      </>
    </BrowserRouter>
  </div>
);

App.defaultProps = {
  authorized: false,
};

export default connect((state: AppState) => ({
  authorized: state.user.authorized,
}))(App);
