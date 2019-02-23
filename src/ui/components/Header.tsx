import React from 'react';

const renderSigned = (name: string) => (
  <span className="header__greeting">{name}</span>
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

export default Header;
