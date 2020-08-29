import React from 'react';
import { Router as BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from './components/Layout.js';
import Home from './components/Home.js';
import Chart from './components/Chart.js';
import Typography from './components/Typography.js';
import Spinner from './components/Spinner.js';
import Heartbeat from './components/Heartbeat.js';
import ImageSpinner from './components/ImageSpinner.js';
import ResponsiveImage from './components/ResponsiveImage.js';

const Auth = () => <h1>Auth</h1>;
const NotFound = () => <h1 style={{ textAlign: 'center' }}>Not Found</h1>
const isAuthenticated = () => window.localStorage.getItem('token');

export const history = createBrowserHistory();

history.listen(({ pathname }) => {
    window.document.title = pathname.slice(1);
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
});

export const Router = () => {
    return (
        <BrowserRouter history={history}>
            <Layout>
                <Switch>
                    <Route path={'/'} exact={true} component={Home} />
                    <Route path={'/chart-async'} exact={true} component={Chart} />
                    <Route path={'/jss-reset-typography'} exact={true} component={Typography} />
                    <Route path={'/responsive-image'} exact={true} component={ResponsiveImage} />
                    <Route path={'/auth'} exact={true} render={props => !isAuthenticated() ? <Auth {...props} /> : <Redirect to={'/'} />} />
                    <Route path={'/spinner'} exact={true} component={() => <Spinner />} />
                    <Route path={'/heartbeat'} exact={true} component={() => <Heartbeat />} />
                    <Route path={'/img'} exact={true} component={() => <ImageSpinner />} />
                    <Route path={'/*'} exact={true} component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
