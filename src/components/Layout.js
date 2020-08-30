import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav.js';

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Nav />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
