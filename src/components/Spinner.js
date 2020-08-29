// https://codepen.io/supah/pen/BjYLdW
import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    'root': {
        'width': props => props.size,
        'height': 'auto',
        'animation': '$rotate 2s linear infinite',
        '& circle': {
            'animation': '$dash 1.5s ease-in-out infinite',
        },
    },
    '@keyframes rotate': {
        '100%': {
            'transform': 'rotate(360deg)',
        },
    },
    '@keyframes dash': {
        '0%': {
            'strokeDasharray': '1, 150',
            'strokeDashoffset': '0',
        },
        '50%': {
            'strokeDasharray': '90, 150',
            'strokeDashoffset': '-35',
        },
        '100%': {
            'strokeDasharray': '90, 150',
            'strokeDashoffset': '-124',
        },
    },
});

const Spinner = ({ size = 50, color = '#333', strokeLineCap = 'square', ...props }) => {
    const classes = useStyles({ size });

    return (
        <svg className={classes.root} viewBox='0 0 50 50' {...props}>
            <circle cx='25' cy='25' r='20' fill='none' stroke={color} strokeWidth='3' strokeLinecap={strokeLineCap} />
        </svg>
    );
};

Spinner.propTypes = {
    size: PropTypes.Number,
    color: PropTypes.string,
    strokeLineCap: PropTypes.string,
};

export default Spinner;
