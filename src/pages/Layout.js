import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Page">page</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};
export default Layout;