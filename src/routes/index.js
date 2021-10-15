import Dashboard from './Dashboard/Dashboard'
import NotFound from './NotFound'

export default [
  {
    name: 'dashboard',
    path: '/',
    component: Dashboard
  },
  {
    name: 'notFound',
    path: '/not-found',
    component: NotFound
  }
]
