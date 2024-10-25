import { Outlet } from "react-router-dom";
import { Sidebar } from "../widgets/sidebar";
import { Header } from "../widgets/header";

export const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
