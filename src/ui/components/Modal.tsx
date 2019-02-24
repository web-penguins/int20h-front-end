import React from 'react';

const Modal: React.FC<{ children: React.ReactElement; open: boolean }> = ({
  children,
  open,
}) => (
  <div className={`modal ${open ? 'modal_open' : ''}`}>
    <div className="modal__wrapper">{children}</div>
  </div>
);

export default Modal;
