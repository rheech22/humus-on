import { Outlet } from "react-router-dom";
import { Sidebar } from "../widgets/sidebar";

export const Layout = () => {
  return (
    <>
      <header>헤더</header>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
