import { Link, Outlet, Navigate, useLocation } from "react-router-dom";
function DefaultLayout() {
  const isAuth = true;
  const location = useLocation();
  if (isAuth) {
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
  } else {
    return <Navigate to="/login" state={{ form: location }} replace />;
  }
}

export default DefaultLayout;
