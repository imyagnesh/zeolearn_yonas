import { lazy } from 'react';

const AsyncTodos = lazy(() => import('./screen/todos'));
const AsyncAbout = lazy(() => import('./screen/about/About'));
const AsyncUsers = lazy(() => import('./screen/users/Users'));

const routes = [
  {
    path: '/',
    exact: true,
    component: AsyncTodos,
    title: 'Home',
  },
  {
    path: '/about',
    component: AsyncAbout,
    title: 'About',
  },
  {
    path: '/users',
    exact: true,
    component: AsyncUsers,
    title: 'Users',
  },
];

export default routes;
