import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../store/reducers';

const renderSigned = (name: string) => (
  <div className="header__greeting">
    <span>Signed in as </span>
    <Link to="/profile">{name}</Link>
  </div>
);
const renderUnsigned = () => '';

const Header: React.FC<{ authorized: boolean; name: string }> = ({
  authorized,
  name,
}) => (
  <div className="header">
    <div className="header__left">
      <span className="header__appname">Neural lab</span>
    </div>
    <div className="header__right">
      {authorized ? renderSigned(name) : renderUnsigned()}
    </div>
  </div>
);

export default connect((state: AppState) => ({
  authorized: state.user.authorized,
  name: state.user.user ? state.user.user.name : '',
}))(Header);
