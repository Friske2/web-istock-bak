import { Link, Outlet } from "react-router-dom";
function DefaultLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Todo">todo</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default DefaultLayout;
