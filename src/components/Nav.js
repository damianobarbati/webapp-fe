import React from 'react';
import { createUseStyles } from 'react-jss';

import { NavLink } from 'react-router-dom';

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

    return (
        <ul className={classes.root}>
            <li className={classes.li}>
                <NavLink to={'/'} exact={true} activeClassName={classes.selectedLink} className={classes.link}>{`${window.location.pathname === '/' ? 'Home' : 'Back to Home'}`}</NavLink>
            </li>

            <li className={classes.li}>
                <NavLink to={'/responsive-image'} exact={true} activeClassName={classes.selectedLink} className={classes.link}>Responsive image</NavLink>
            </li>

            <li className={classes.li}>
                <NavLink to={'/chart-async'} exact={true} activeClassName={classes.selectedLink} className={classes.link}>Async chart loading</NavLink>
            </li>

            <li className={classes.li}>
                <NavLink to={'/form'} exact={true} activeClassName={classes.selectedLink} className={classes.link}>Form</NavLink>
            </li>

            <li className={classes.li}>
                <NavLink to={'/jss-reset-typography'} exact={true} activeClassName={classes.selectedLink} className={classes.link}>jss-reset typography</NavLink>
            </li>
        </ul>
    );
};

export default Nav;
