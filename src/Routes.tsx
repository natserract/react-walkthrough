import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import App from './App'
import NotFound from './pages/NotFound';

// Mapping routes
const routes: {
  path: string;
  component: React.ComponentType;
  exact?: boolean
}[] = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/:username/album/:albumname',
    component: React.lazy(() => import('./pages/album'))
  },
  {
    path: '/favorite',
    component: React.lazy(() => import('./pages/favorite'))
  },
  {
    path: '/user/:username',
    component: React.lazy(() => import('./pages/user'))
  },
  {
    path: '*',
    component: NotFound
  }
]

const Routes: React.FC = () => {
  return (
    <App>
      <Switch>
        {routes.map(({ path, component, exact }, key) => (
          <Route 
            exact={exact} 
            path={path} 
            component={component} 
            key={key} 
          />
        ))}
      </Switch>
    </App>
  )
}

export default Routes