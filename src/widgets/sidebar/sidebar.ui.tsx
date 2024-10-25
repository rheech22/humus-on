import { Link } from "react-router-dom";
import { MENU } from "./sidebar.const";

export const Sidebar = () => {
  return (
    <div>
      {Object.entries(MENU).map(([key, { title, routes }]) => {
        return (
          <div key={key}>
            <div>{title}</div>
            <ul>
              {routes.map(({ title, path }) => {
                return (
                  <li key={title}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
