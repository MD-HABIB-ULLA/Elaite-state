import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";

const Navber = () => {
  const { user,  signOutUser , loading} = useContext(Authcontext);
  
  
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
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2 text-[#00c194] ${
            isActive
              ? " font-bold rounded-t-lg bg-[#00c19411] border-b-2 rounded-none  border-[#00c194]"
              : "font-normal  border-none"
          } `
        }
        to="estates"
      >
        Estates
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
        // Sign-out successful.
        console.log("User signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };
  return (
    <div className="navbar container m-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {list}
          </div>
        </div>
        <Link to="/" className="  h-12 min-h-12 text-xl">
          <img className="h-full" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1 ">{list}</div>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-3 items-center">
            <a className="my-anchor-element">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User avatar"
                    src={!loading? user.photoURL : ""}
                  />
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
