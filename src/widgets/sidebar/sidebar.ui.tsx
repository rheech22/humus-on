import { Link } from "react-router-dom";
import { MENU } from "./sidebar.const";
import { useToggleList } from "../../shared/hooks/use-toggle-list";

import * as x from "@stylexjs/stylex";
import { color, size } from "../../shared/styles/tokens.stylex";

const styles = x.create({
  organization: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    padding: "8px",
    height: size.pageTitleHeight,
    borderBottom: `1px solid ${color.green}`,
  },
  sidebar: {
    borderRight: `1px solid ${color.gray}`,
    width: "180px",
  },
  menu: {
    padding: "8px",
    borderBottom: `1px solid ${color.gray}`,
    fontWeight: "bold",
    fontSize: "16px",
    textAlign: "left",
    width: "100%",
  },
  routes: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    borderBottom: `1px solid ${color.gray}`,
    padding: "16px",
    fontSize: "14px",
  },
});

export const Sidebar = () => {
  const { isToggled, toggle } = useToggleList(false);
  return (
    <aside {...x.props(styles.sidebar)}>
      <div {...x.props(styles.organization)}>휴먼스온</div>
      {Object.entries(MENU).map(([key, { title, routes }]) => {
        return (
          <div key={key}>
            <button {...x.props(styles.menu)} onClick={() => toggle(key)}>
              {title}
            </button>
            {isToggled(key) && (
              <ul {...x.props(styles.routes)}>
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
    </aside>
  );
};
