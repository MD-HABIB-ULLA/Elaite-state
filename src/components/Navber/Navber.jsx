import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

const Navber = () => {
  const { user, signOutUser, loading } = useContext(Authcontext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the isOpen state
  };
  // const {photoURL} = user;
  const list = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2 text-[#00c194] ${
            isActive
              ? " font-bold rounded-t-lg bg-[#00c19411] border-b-2 rounded-none border-[#00c194]"
              : "font-normal  border-none"
          } `
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/aboutus"
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2 text-[#00c194] ${
            isActive
              ? " font-bold rounded-t-lg bg-[#00c19411] border-b-2 rounded-none border-[#00c194]"
              : "font-normal  border-none"
          } `
        }
      >
        About us
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2 text-[#00c194] ${
            isActive
              ? " font-bold rounded-t-lg bg-[#00c19411] border-b-2 rounded-none border-[#00c194]"
              : "font-normal  border-none"
          } `
        }
        to="/update-profile"
      >
        Update Profile
      </NavLink>
    </>
  );
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign-out successful");
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <div className="navbar container m-auto ">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="navbar-start">
        <div className="dropdown">
          {isOpen ? (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-2xl font-bold"
              onClick={toggleDropdown}
            >
              <RiMenu2Line className="h-8 w-8 text-[#00c194]" />
            </div>
          ) : (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-2xl font-bold"
              onClick={toggleDropdown}
            >
              <RiMenu2Line className="h-8 w-8 text-[#00c194]" />
            </div>
          )}
          {isOpen && (
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              {/* Dropdown content */}
              {list}
            </div>
          )}
        </div>
        <Link to="/" className="  h-12 min-h-12 text-xl">
          <img className="h-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 ">{list}</div>
      </div>
      <div className="navbar-end">
        {/* {user ? (
          <div className="flex gap-3 items-center">
            <a className="my-anchor-element">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {loading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <img alt="User avatar" src={user.photoURL} />
                  )}
                </div>
              </div>
            </a>
            <Tooltip
              className="uppercase font-bold"
              anchorSelect=".my-anchor-element"
              place="left"
            >
              {user.displayName}
            </Tooltip>
            <button
              onClick={handleSignOut}
              className="btn bg-[#  ] text-white font-bold"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-[#00c194] text-base hover:bg-[#00c19469] text-white font-bold"
          >
            Login
          </Link>
        )} */}
        {loading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : user ? (
          <div className="flex gap-3 items-center">
            <a className="my-anchor-element">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {loading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <img alt="User avatar" src={user.photoURL} />
                  )}
                </div>
              </div>
            </a>
            <Tooltip
              className="uppercase font-bold"
              anchorSelect=".my-anchor-element"
              place="left"
            >
              {user ? user.displayName : "habib"}
            </Tooltip>
            <button
              onClick={handleSignOut}
              className="btn bg-[#00c194] text-white font-bold"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-[#00c194] text-base hover:bg-[#00c19469] text-white font-bold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
