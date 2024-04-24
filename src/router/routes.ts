import { RouteObject } from "react-router";

import AuthLayout from "@/pages/layouts/AuthLayout";
import PanelLayout from "@/pages/layouts/PanelLayout";

import LoginPage from "@/pages/Auth/LoginPage";
import HomePage from "@/pages/DashboardPage";
import NotFoundPage from "@/pages/Error/NotFoundPage";
import AssetsPage from "@/pages/Finance/AssetsPage";
import BalancePage from "@/pages/Finance/Balance/BalancePage";
import IndependencePage from "@/pages/Finance/IndependencePage";
import IPCAPage from "@/pages/Finance/IPCAPage";
import PortfolioPage from "@/pages/Finance/PortfolioPage";
import FinanceLayout from "@/pages/Finance/FinanceLayout";

const routes: Array<RouteObject> = [
  {
    id: `AuthRoot`,
    path: `auth`,
    Component: AuthLayout,
    children: [
      {
        id: `Login`,
        path: `sigin`,
        Component: LoginPage,
      }
    ],
  },
  {
    id: `Root`,
    path: `/`,
    Component: PanelLayout,
    children: [
      {
        id: `Dashboard`,
        path: `dashboard`,
        Component: HomePage,
      },
      {
        id: `Finance`,
        path: `finance`,
        Component: FinanceLayout,
        children: [
          {
            id: `Balance`,
            path: `balance`,
            index: true,
            Component: BalancePage,
          },
          {
            id: `Assets`,
            path: `assets`,
            Component: AssetsPage,
          },
          {
            id: `Independence`,
            path: `independence`,
            Component: IndependencePage,
          },
          {
            id: `IPCA`,
            path: `ipca`,
            Component: IPCAPage,
          },
          {
            id: `Portfolio`,
            path: `portfolio`,
            Component: PortfolioPage,
          },
        ],
      },
      {
        id: `NotFound`,
        path: `*`,
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
