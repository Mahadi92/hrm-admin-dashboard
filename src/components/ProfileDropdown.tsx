import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import classNames from "classnames";
import FeatherIcon from "feather-icons-react";
import { AuthContext } from "../context/AuthContext";

interface ProfileMenuItem {
  signOut?: string;
  label?: string;
  icon: string;
  redirectTo: string;
}

interface ProfileDropdownProps {
  menuItems: Array<ProfileMenuItem>;
  profilePic?: string;
  username: string;
}

const ProfileDropdown = (props: ProfileDropdownProps) => {
  const profilePic = props.profilePic || null;
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /*
   * toggle profile-dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const { disspatch } = useContext(AuthContext)
  const handleLogout = () => {
    disspatch({ type: "LOGOUT" })
    localStorage.removeItem('username');
    localStorage.removeItem('passwd');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('apps-employe');
    localStorage.removeItem('apps-hr-employe');
    localStorage.removeItem('apps-admin-setup');
  }
  return (
    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle
        id="dropdown-profile"
        as="a"
        onClick={toggleDropdown}
        className={classNames(
          "nav-link",
          "nav-user",
          "me-0",
          "cursor-pointer",
          { show: dropdownOpen }
        )}
      >
        <img src={profilePic!} className="rounded-circle" alt="" />
        <span className="pro-user-name ms-2">
          {props.username} <i className="uil uil-angle-down"></i>
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-end profile-dropdown">
        <div onClick={toggleDropdown}>
          <div className="dropdown-header noti-title">
            <h6 className="text-overflow m-0">Welcome !</h6>
          </div>
          {(props.menuItems || []).map((item, i) => {
            return (
              <React.Fragment key={i}>
                {i === props.menuItems.length - 1 && (
                  <div className="dropdown-divider"></div>
                )}
                <Link
                  to={item.redirectTo}
                  className="dropdown-item notify-item"
                  key={i + "-profile-menu"}
                >
                  <FeatherIcon
                    icon={item.icon}
                    className="icon-dual icon-xs me-1"
                  />
                  <span>{item.label}</span>
                  {item.signOut === "yes" ? <span onClick={handleLogout}>Logout Now</span> : " "}
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
