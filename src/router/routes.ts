import { RouteObject } from "react-router";

import AuthLayout from "@/pages/layouts/AuthLayout";
import PanelLayout from "@/pages/layouts/PanelLayout";

import LoginPage from "@/pages/Auth/LoginPage";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/Error/NotFoundPage";

const routes: Array<RouteObject> = [
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      {
        path: 'sigin',
        Component: LoginPage,
      }
    ],
  },
  {
    path: '/',
    Component: PanelLayout,
    children: [
      {
        path: 'home',
        Component: HomePage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      }
    ],
  },
  // {
  //   path: '*',
  //   Component: PanelLayout,
  //   children: [
  //   ],
  // }
];

export default routes;
