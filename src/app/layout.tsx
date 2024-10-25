import { Outlet } from "react-router-dom";
import { Sidebar } from "../widgets/sidebar";
import { Header } from "../widgets/header";
import { useToggleList } from "../shared/hooks/use-toggle-list";

import * as x from "@stylexjs/stylex";
import { color, size } from "../shared/styles/tokens.stylex";
import { PageTitle } from "../widgets/page-title";
import { useBreadcrumbs } from "../shared/hooks/use-breadcrumbs";

const styles = x.create({
  outer: {
    display: "flex",
    height: `calc(100vh - ${size.headerHeight})`,
  },
  inner: {
    width: "100%",
  },
  page: {
    width: "100%",
    height: `calc(100vh - ${size.headerHeight} - ${size.pageTitleHeight})`,
    backgroundColor: color.gray,
    padding: "16px",
  },
  content: {
    borderRadius: "12px",
    padding: "16px",
    backgroundColor: color.white,
    height: "100%",
  },
});

export const Layout = () => {
  const { toggle, isToggled } = useToggleList(true);
  const { breadcrumbs } = useBreadcrumbs();
  return (
    <>
      <Header onClick={() => toggle("sidebar")} />
      <div {...x.props(styles.outer)}>
        <Sidebar
          expanded={isToggled("sidebar")}
          currentPageTitle={breadcrumbs[breadcrumbs.length - 1]}
        />
        <div {...x.props(styles.inner)}>
          <PageTitle breadcrumbs={breadcrumbs} />
          <div {...x.props(styles.page)}>
            <div {...x.props(styles.content)}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
