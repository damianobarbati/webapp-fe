import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Spinner from './components/Spinner.js';
import AuthGate from './components/AuthGate.js';
import Profile from './views/Profile.js';

const Home = lazy(() => import('./views/Home.js'));
const Resume = lazy(() => import('./views/Resume.js'));
const Chart = lazy(() => import('./views/Chart.js'));
const Typography = lazy(() => import('./views/Typography.js'));
const Heartbeat = lazy(() => import('./views/Heartbeat.js'));
const ImageSpinner = lazy(() => import('./views/ImageSpinner.js'));
const ResponsiveImage = lazy(() => import('./views/ResponsiveImage.js'));

const Auth = lazy(() => import('./views/Auth.js'));

const NotFound = () => <h1>Not Found</h1>;

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/resume'} element={<Resume />} />
            <Route path={'/chart'} element={<Chart />} />
            <Route path={'/typography'} element={<Typography />} />
            <Route path={'/responsive-image'} element={<ResponsiveImage />} />
            <Route path={'/heartbeat'} element={<Heartbeat />} />
            <Route path={'/img'} element={<ImageSpinner />} />
            <Route path={'/home'} element={<Home />} />
            <Route path={'/app'}>
              <Route path={'/app/auth'} element={<AuthGate if_auth={false} element={<Auth />} />} />
              <Route path={'/app/profile'} element={<AuthGate if_auth={true} element={<Profile />} />} />
            </Route>
            <Route path={'/*'} element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
