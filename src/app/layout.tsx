import { Outlet } from "react-router-dom";
import { Sidebar } from "../widgets/sidebar";
import { Header } from "../widgets/header";
import { useToggleList } from "../shared/hooks/use-toggle-list";

import * as x from "@stylexjs/stylex";
import { size } from "../shared/styles/tokens.stylex";

const styles = x.create({
  wrapper: {
    display: "flex",
    height: `calc(100vh - ${size.headerHeight})`,
  },
});

export const Layout = () => {
  const { toggle, isToggled } = useToggleList(true);

  return (
    <>
      <Header onClick={() => toggle("sidebar")} />
      <div {...x.props(styles.wrapper)}>
        {isToggled("sidebar") && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
};
