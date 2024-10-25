import { Link } from "react-router-dom";
import { MENU } from "./sidebar.const";
import { useToggleList } from "../../shared/hooks/use-toggle-list";

export const Sidebar = () => {
  const { isToggled, toggle } = useToggleList(false);
  return (
    <div>
      {Object.entries(MENU).map(([key, { title, routes }]) => {
        return (
          <div key={key}>
            <div onClick={() => toggle(key)}>{title}</div>
            {isToggled(key) && (
              <ul>
                {routes.map(({ title, path }) => {
                  return (
                    <li key={title}>
                      <Link to={path}>{title}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};
