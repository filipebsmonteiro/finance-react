import { RouteObject, createBrowserRouter } from 'react-router-dom'
import routes from './routes'

const router = createBrowserRouter(routes);

export default router;

export function getRouteByPath(path: string): RouteObject | undefined  {
  return routes.find(r => r.path === path);
}