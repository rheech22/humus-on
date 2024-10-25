import {
  createBrowserRouter,
  RouterProvider as BaseRouterProvider,
} from "react-router-dom";
import { Layout } from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/notice",
        element: <div>notice</div>,
      },
      {
        path: "/qna",
        element: <div>qna</div>,
      },
      {
        path: "/dispatch",
        element: <div>dispatch</div>,
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <BaseRouterProvider router={router} />;
};
