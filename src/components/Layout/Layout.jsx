import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
    <Navbar/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
