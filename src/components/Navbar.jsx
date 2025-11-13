import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { IoMdMenu } from "react-icons/io";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, setUser, signOutUser, loading } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              icon: "success",
            });
            setUser(null);
            setMenuOpen(false);
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeMode = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      <NavLink onClick={handleLinkClick} className="font-medium" to={`/`}>
        Home
      </NavLink>
      <NavLink
        onClick={handleLinkClick}
        className="font-medium"
        to={`/all-habits`}
      >
        PublicHabits
      </NavLink>
      <NavLink
        onClick={handleLinkClick}
        className="font-medium"
        to={`/my-habits`}
      >
        MyHabit
      </NavLink>
      <NavLink
        onClick={handleLinkClick}
        className="font-medium"
        to={`/add-habit`}
      >
        AddHabit
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm mb-8 md:mb-15 sticky top-0 z-50">
      {/* Mobile Menu */}
      <div className="dropdown dropdown-start md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn m-1 flex items-center"
        >
          <IoMdMenu size={22} />
        </button>

        {menuOpen && (
          <ul
            className="menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm space-y-2 absolute top-12 left-0"
            onClick={handleLinkClick}
          >
            {links}
          </ul>
        )}
      </div>

      {/* Logo */}
      <Link to={`/`} className="flex-1 flex items-center gap-1">
        <img
          className="w-10"
          src="https://i.ibb.co/Kxwb7rqF/img-icons8.png"
          alt="logo"
        />
        <h3 className="font-semibold text-lg text-purple-500">HabitFlow</h3>
      </Link>

      {/* Desktop Links + Auth */}
      <div className="flex gap-2 md:gap-4 items-center nav">
        <div className="hidden md:flex gap-4">{links}</div>

        {/* User Menu */}
        <div className="dropdown dropdown-end">
          {loading ? (
            <span className="loading loading-spinner loading-5xl"></span>
          ) : !user ? (
            <div className="flex gap-1">
              <Link
                className="btn bg-purple-500 text-white hover:bg-purple-600"
                to={`/login`}
              >
                LogIn
              </Link>
              <Link
                className="btn hidden md:flex bg-purple-500 text-white hover:bg-purple-600"
                to={`/register`}
              >
                Register
              </Link>
            </div>
          ) : (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="USER" src={user?.photoURL} />
              </div>
            </div>
          )}
          {user && (
            <ul
              tabIndex="1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow"
            >
              <li>
                <p className="justify-between">{user?.displayName}</p>
              </li>
              <li>
                <p>{user?.email}</p>
              </li>
              <li>
                <button
                  className="btn bg-purple-600 text-white"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </li>
              <li>
                <div className="navbar">
                  <input
                    onChange={(e) => handleThemeMode(e.target.checked)}
                    type="checkbox"
                    defaultChecked={localStorage.getItem("theme") === "dark"}
                    className="toggle"
                  />
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
