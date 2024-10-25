import {
  createBrowserRouter,
  RouterProvider as BaseRouterProvider,
} from "react-router-dom";
import { Layout } from "./layout";
import { ROUTE } from "../shared/constants/routes";

const router = createBrowserRouter([
  {
    path: ROUTE.home,
    element: <Layout />,
    children: [
      {
        path: ROUTE.notice,
        element: <div>notice</div>,
      },
      {
        path: ROUTE.qna,
        element: <div>qna</div>,
      },
      {
        path: ROUTE.dispatch,
        element: <div>dispatch</div>,
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <BaseRouterProvider router={router} />;
};
