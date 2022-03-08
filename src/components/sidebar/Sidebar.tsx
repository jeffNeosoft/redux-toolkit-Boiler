import React from "react";
import { Link, useLocation } from "react-router-dom";
import withRouter from "../../WithRouter";
import adminRoutes from "./adminRoutes";

export const Sidebar = () => {
  const location = useLocation();
  const isPathActive = (path: string) => {
    return location.pathname.startsWith(path);
  };
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a
              href="!#"
              className="nav-link"
              onClick={(evt) => evt.preventDefault()}
            >
              <div className="nav-profile-image">
                <img
                  src={`${process.env.REACT_APP_HOST}/images/faces/face1.jpg`}
                  alt="profile"
                />
                <span className="login-status online"></span>{" "}
                {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text">
                <span className="font-weight-bold mb-2">
                  <>Santosh Shinde</>
                </span>
                <span className="text-secondary text-small">
                  <>Project Manager</>
                </span>
              </div>
              <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
          </li>
          {adminRoutes.map((route, index) => (
            <li
              key={`route${index}`}
              className={
                isPathActive(route.path) ? "nav-item active" : "nav-item"
              }
            >
              <Link className="nav-link" to={route.path}>
                <span className="menu-title">
                  <>{route.title}</>
                </span>
                <i className={route.title}></i>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default withRouter(Sidebar);
