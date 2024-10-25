import { useLocation } from "react-router-dom";
import { MENU } from "../constants/menu";

const PATH_TO_BREADCRUMBS = Object.values(MENU).reduce<
  Record<string, string[]>
>((acc, { title, routes }) => {
  routes.forEach(({ path, title: t }) => (acc[path] = [title, t]));
  return acc;
}, {});
export const useBreadcrumbs = () => {
  const { pathname } = useLocation();
  return { breadcrumbs: PATH_TO_BREADCRUMBS[pathname] };
};
