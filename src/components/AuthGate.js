import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthGate = ({ if_auth, element }) => {
  const { id } = useSelector(({ app: { id } }) => ({ id }));

  if (if_auth) {
    if (id) {
      return element;
    } else {
      return <Navigate to={'/app/auth?redirect_on_auth=' + location.pathname} />;
    }
  } else {
    if (id) {
      return <Navigate to={'/app/profile'} />;
    } else {
      return element;
    }
  }
};

AuthGate.propTypes = {
  if_auth: PropTypes.bool.isRequired,
  element: PropTypes.any.isRequired,
};

export default AuthGate;
