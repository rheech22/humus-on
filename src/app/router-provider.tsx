import {
  createBrowserRouter,
  RouterProvider as BaseRouterProvider,
} from "react-router-dom";
import { Layout } from "./layout";
import { ROUTE } from "../shared/constants";
import { NoticePage } from "../pages";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        path: ROUTE.home,
        element: <NoticePage />,
      },
      {
        path: ROUTE.qna,
        element: <div>Q&A</div>,
      },
      {
        path: ROUTE.dispatch,
        element: <div>메시지 발송</div>,
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <BaseRouterProvider router={router} />;
};
