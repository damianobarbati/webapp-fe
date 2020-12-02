// https://codepen.io/anon/pen/Rveabd
import React, { useEffect, useState, useRef } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    root: `
        min-width: 100px;
        min-height: 100px;
        max-width: 500px;
        height: auto;
        border: 1px solid black;
        transition: height 1s ease;
        background-image: url("data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='UTF-8'?%3E%3Csvg width='40px' height='40px' enable-background='new 0 0 50 50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'%3E%3CanimateTransform attributeName='transform' attributeType='xml' dur='0.6s' from='0 25 25' repeatCount='indefinite' to='360 25 25' type='rotate'/%3E%3C/path%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
        margin: auto;
    `,
    img: `
        max-width: 500px;
        height: auto;
        border: 1px solid black;
        transition: height 1s ease;
        margin: auto;
    `
});

const ImageSpinner = ({ ...props }) => {
    const classes = useStyles();
    const timeout = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        timeout.current = setTimeout(() => setLoading(false), 2000);
        return () => window.clearTimeout(timeout.current);
    }, []);

    if (loading) {
        return <img className={classes.root} {...props} />
    }

    return <img src={'https://upload.wikimedia.org/wikipedia/commons/9/95/Big_Pine_landscape.jpg'} className={classes.img} {...props} />
};

export default ImageSpinner;
