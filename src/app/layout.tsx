import { Outlet } from "react-router-dom";
import { Sidebar, Header, PageTitle } from "../widgets";
import { useToggleList, useBreadcrumbs } from "../shared/hooks";
import { color, size } from "../shared/styles";
import * as x from "@stylexjs/stylex";

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
