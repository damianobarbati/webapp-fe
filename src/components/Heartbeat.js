// https://codepen.io/jupa8712/pen/XmbyXE
import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    'root': {
        'width': 150,
        'position': 'relative'
    },
    'fadeIn': {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'backgroundColor': ({ backgroundColor }) => backgroundColor,
        'top': '0',
        'right': '0',
        'animation': '$heartRateIn 2.5s linear infinite'
    },
    'fadeOut': {
        'position': 'absolute',
        'width': '100%',
        'height': '100%',
        'top': '0',
        'left': '-100%',
        'background': 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, 0) 100%)',
        'animation': '$heartRateOut 2.5s linear infinite',
    },
    '@keyframes heartRateIn': {
        '0%': {
            'width': '100%'
        },
        '50%': {
            'width': '0'
        },
        '100%': {
            'width': '0'
        }
    },
    '@keyframes heartRateOut': {
        '0%': {
            'left': '-120%'
        },
        '30%': {
            'left': '-120%'
        },
        '100%': {
            'left': '0'
        }
    }
});

const Heartbeat = ({ color = '#333', backgroundColor = '#fff', strokeWidth = 3, ...props }) => {
    const classes = useStyles({ backgroundColor });

    return (
        <div className={classes.root} {...props}>
            <svg x='0px' y='0px' width='150px' height='73px' viewBox='0 0 150 73' enableBackground='new 0 0 150 73'>
                <polyline fill='none' stroke={color} strokeWidth={strokeWidth} strokeMiterlimit='10' points='0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486'/>
            </svg>
            <div className={classes.fadeIn}/>
            <div className={classes.fadeOut}/>
        </div>
    );
};

Heartbeat.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    strokeWidth: PropTypes.number,
};

export default Heartbeat;
