import {
  createBrowserRouter,
  RouterProvider as BaseRouterProvider,
} from "react-router-dom";
import { Layout } from "./layout";
import { ROUTE } from "../shared/constants/routes";
import { NoticePage } from "../pages/notice";

const router = createBrowserRouter([
  {
    path: ROUTE.home,
    element: <Layout />,
    children: [
      {
        path: ROUTE.notice,
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
