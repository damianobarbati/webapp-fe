import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    root: {
        textAlign: 'center',
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <h1>Hello, I&apos;m Damiano Barbati</h1>

            <h2>I&apos;m a divergent software developer from Rome 🇮🇹️<br /></h2>

            <h3>This website is my personal playground 😈</h3>

            <p>
            First goal of this website is testing my webapp starter kit, you can get the code <a href={'https://github.com/damianobarbati/webapp'} target={'_blank'} rel={'noopener noreferrer'}>on the GitHub repository</a>.<br />
            Secondary goal is sharing thoughts and showcasing experiments, read and use at your own mental-health risk.<br />
            </p>
        </main>
    );
};

export default Home;
