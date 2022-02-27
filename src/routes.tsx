import type { RouteObject } from "react-router-dom";
import Home from "./views/Home";
import Todo from "./views/Todo";
import Login from "./views/Login";
import Page404 from "./views/Page404";
import DefaultLayout from "./layout/default";
const Routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Todo",
        element: <Todo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

export default Routes;
