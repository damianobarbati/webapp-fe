import React from 'react';
import { createUseStyles } from 'react-jss';
import cx from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../store/app.js';

const useStyles = createUseStyles({
  root: {
    width: 'max-content',
    margin: '50px auto 0',
    display: 'grid',
    gridAutoFlow: 'row',
    gridTemplateColumns: 'max-content',
    gridRowGap: '15px',
    justifyItems: 'center',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  selectedLink: {
    textDecoration: 'underline',
  },
});

const Nav = () => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useSelector(({ app: { id } }) => ({ id }));

  const className = ({ isActive }) => cx(classes.link, isActive && classes.selectedLink, 'cursor-pointer');

  const prefetchChartComponent = () => import('../views/Chart.js');

  const signOut = () => dispatch(actions.signOut());

  return (
    <ul className={classes.root}>
      <li>
        <NavLink className={className} to={'/'}>{`${location.pathname === '/' ? 'Home' : 'Back to Home'}`}</NavLink>
      </li>

      <li>
        <NavLink className={className} to={'/resume'}>
          Resume
        </NavLink>
      </li>

      <li>
        <NavLink className={className} to={'/responsive-image'}>
          Responsive image
        </NavLink>
      </li>

      <li onMouseEnter={prefetchChartComponent}>
        <NavLink className={className} to={'/chart'}>
          Chart (prefetched)
        </NavLink>
      </li>

      <li>
        <NavLink className={className} to={'/typography'}>
          Typography
        </NavLink>
      </li>

      {!id && (
        <li>
          <NavLink className={className} to={'/app/auth'}>
            Auth
          </NavLink>
        </li>
      )}

      {!!id && (
        <li>
          <NavLink className={className} to={'/app/profile'}>
            Profile
          </NavLink>
        </li>
      )}

      {!!id && (
        <li>
          <a className={className({ isActive: false })} onClick={signOut} href="#">
            Sign out
          </a>
        </li>
      )}
    </ul>
  );
};

export default Nav;
