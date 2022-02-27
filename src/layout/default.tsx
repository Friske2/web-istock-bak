import {
  Link,
  Outlet,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Button } from "antd";
function DefaultLayout() {
  const navigate = useNavigate();
  let isAuth = false;
  const user = sessionStorage.getItem("user");
  if (user) {
    isAuth = JSON.parse(user).username ? true : false;
  }
  function logout() {
    sessionStorage.removeItem("user");
    navigate("/login");
  }
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
        <Button type="primary" onClick={logout}>
          logout
        </Button>
        <Outlet />
      </div>
    );
  } else {
    return <Navigate to="/login" state={{ form: location }} replace />;
  }
}

export default DefaultLayout;
