import React, { use } from "react";
import { Link, Outlet } from "react-router";
import { IoMdAddCircle } from "react-icons/io";
import { TbIrregularPolyhedron } from "react-icons/tb";
import { GiEgyptianProfile } from "react-icons/gi";
import { AuthContext } from "../AuthContext/AuthContext";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { GoSignOut } from "react-icons/go";


const DashboardLayout = () => {
  const { signOutUser, setUser } = use(AuthContext);

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
            
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };
  
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4">
            {/* Logo */}
            <Link to={`/`} className="flex-1 flex items-center gap-1">
              <img
                className="w-10"
                src="https://i.ibb.co/Kxwb7rqF/img-icons8.png"
                alt="logo"
              />
              <h3 className="font-bold text-lg text-purple-500">HabitFlow</h3>
            </Link>
          </div>
        </nav>
        {/* Page content here */}
        <div className="p-4">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <Link
                to={`/dashboard`}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard Home"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Dashboard Home</span>
              </Link>
            </li>

            {/* List item */}
            <li>
              <Link
                to={`/dashboard/add-habit`}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Add Habit"
              >
                {/* Add habit icon */}
                <IoMdAddCircle></IoMdAddCircle>
                <span className="is-drawer-close:hidden">Add Habit</span>
              </Link>
            </li>
            {/* List item */}
            <li>
              <Link
                to={`/dashboard/my-habits`}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Habit"
              >
                {/* My habit icon */}
                 <TbIrregularPolyhedron />
                <span className="is-drawer-close:hidden">My Habit</span>
              </Link>
            </li>
            {/* List item */}
            <li>
              <Link
                to={`/dashboard/my-profile`}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Profile"
              >
                {/* My habit icon */}
                 <GiEgyptianProfile />
                <span className="is-drawer-close:hidden">My Profile</span>
              </Link>
            </li>
            {/* List item */}
            <li>
              <button
                onClick={handleSignOut}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="SignOut"
              >
                {/* My habit icon */}
                 <GoSignOut />
                <span className="is-drawer-close:hidden">SignOut</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
