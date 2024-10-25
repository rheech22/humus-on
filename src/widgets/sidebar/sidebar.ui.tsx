import { Link } from "react-router-dom";
import { MENU } from "./sidebar.const";
import { useToggleList } from "../../shared/hooks/use-toggle-list";

import * as x from "@stylexjs/stylex";

const styles = x.create({
  root: {
    backgroundColor: "red",
  },
});

export const Sidebar = () => {
  const { isToggled, toggle } = useToggleList(false);
  return (
    <div {...x.props(styles.root)}>
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
