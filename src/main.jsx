import React from 'react';
import {render} from 'react-dom';
import {Router, useRouterHistory as routerHistory} from 'react-router/es6';
import {createHashHistory as history} from 'history';
import notFound from './views/shared/components/notFoundPage.jsx';
import app from './app.jsx';

function loadRoute(cb) {
    return (module) => cb(null, module.default);
}

function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}

function getHomeRoute(path) {
    return {
        path: path,
        getComponent(location, cb) {
            System.import('./views/home/components/homePage.jsx').then(loadRoute(cb)).catch(errorLoading);
        }
    }
}

let appHistory = routerHistory(history)({ queryKey: false });

let notFoundRoute = {
    path: '*',
    component: notFound
}

let rootRoute = {
    component: app,
    childRoutes: [
        getHomeRoute('/'),
        getHomeRoute('home'),
        notFoundRoute
    ]
}

render(<Router routes={rootRoute} />, document.getElementById('app'));