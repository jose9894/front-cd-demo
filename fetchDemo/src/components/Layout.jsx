import NavBar from "./NavBar"
import { Outlet } from "react-router-dom";
import '../styles/pagestyles.css'


function Layout() {
  return (
    <>
    <div className="layout-wrapper">
        <div className="navigation">
      <NavBar />
      </div>
      <div className="content">
      <Outlet />
      </div>
      </div>
    </>
  );
}

export default Layout
