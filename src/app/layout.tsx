import { Outlet } from "react-router-dom";
import { Sidebar } from "../widgets/sidebar";
import { Header } from "../widgets/header";
import { useToggleList } from "../shared/hooks/use-toggle-list";

import * as x from "@stylexjs/stylex";
import { size } from "../shared/styles/tokens.stylex";
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
});

export const Layout = () => {
  const { toggle, isToggled } = useToggleList(true);
  const { breadcrumbs } = useBreadcrumbs();
  return (
    <>
      <Header onClick={() => toggle("sidebar")} />
      <div {...x.props(styles.outer)}>
        {isToggled("sidebar") && <Sidebar />}
        <div {...x.props(styles.inner)}>
          <PageTitle breadcrumbs={breadcrumbs} />
          <Outlet />
        </div>
      </div>
    </>
  );
};
