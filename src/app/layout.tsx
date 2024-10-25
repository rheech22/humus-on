import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>헤더</header>
      <div style={{ display: "flex" }}>
        <aside>사이드바</aside>
        <Outlet />
      </div>
    </>
  );
};
