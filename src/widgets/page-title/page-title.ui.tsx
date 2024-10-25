import * as x from "@stylexjs/stylex";
import { color, size } from "../../shared/styles/tokens.stylex";

const styles = x.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: "8px",
    borderBottom: `1px solid ${color.green}`,
    height: size.pageTitleHeight,
  },
  title: {
    fontSize: "16px",
  },
  breadcrumbs: {
    display: "flex",
    marginLeft: "auto",
  },
  crumb: {
    fontSize: "12px",
    ":not(:first-of-type)::before": {
      content: "/",
      margin: "0 6px",
    },
  },
});
export const PageTitle = ({ breadcrumbs }: { breadcrumbs: string[] }) => {
  return (
    <header {...x.props(styles.wrapper)}>
      <h2 {...x.props(styles.title)}>{breadcrumbs[breadcrumbs.length - 1]}</h2>
      <nav {...x.props(styles.breadcrumbs)}>
        <span {...x.props(styles.crumb)}>홈</span>
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={index} {...x.props(styles.crumb)}>
            {breadcrumb}
          </span>
        ))}
      </nav>
    </header>
  );
};
