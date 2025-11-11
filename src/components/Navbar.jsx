import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, setUser, signOutUser, loading } = use(AuthContext);

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
            // toast.success("Sign Out Successful");
            setUser(null);
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm mb-15 sticky top-0 z-50">
      <Link to={`/`} className="flex-1 flex items-center gap-1">
        <img
          className="w-10"
          src="https://i.ibb.co/Kxwb7rqF/img-icons8.png"
          alt="logo"
        />
        <h3 className="font-semibold text-lg hidden sm:block">Habit Tracker</h3>
      </Link>
      <div className="flex gap-2 md:gap-4 items-center nav">
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/all-habits`}>Public-Habits</NavLink>
        <NavLink to={`/my-habits`}>My-Habits</NavLink>
        <NavLink to={`/add-habit`}>Add-Habit</NavLink>
        <div className="dropdown dropdown-end">
          {loading ? (
            <span className="loading loading-spinner loading-5xl"></span>
          ) : !user ? (
            <div className="flex gap-1">
              <Link className="btn" to={`/login`}>
                LogIn
              </Link>
              <Link className="btn hidden md:flex" to={`/register`}>
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-52 p-2 shadow"
            >
              <li>
                <p className="justify-between">{user?.displayName}</p>
              </li>
              <li>
                <p>{user?.email}</p>
              </li>
              <li>
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
