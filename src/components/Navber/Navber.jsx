import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";

import { RiMenu2Line } from "react-icons/ri";
import toast from "react-hot-toast";

const Navber = () => {
  const { user, signOutUser, loading } = useContext(Authcontext);

  const list = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2  font-bold ${
            isActive ? " text-[#00c194]" : "text-black"
          } `
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/properties"
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2  font-bold ${
            isActive ? " text-[#00c194]" : "text-black"
          } `
        }
      >
        Properties
      </NavLink>
      <NavLink
        to="/aboutus"
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2  font-bold ${
            isActive ? " text-[#00c194]" : "text-black"
          } `
        }
      >
        Blog
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2  font-bold ${
            isActive ? " text-[#00c194]" : "text-black"
          } `
        }
        to="/agents"
      >
        Agents
      </NavLink>
      <NavLink
        to="/update-profile"
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2  font-bold lg:hidden ${
            isActive ? " text-[#00c194]" : "text-black"
          } `
        }
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
    // <div className="navbar container m-auto ">
    //
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       {isOpen ? (
    //         <div
    //           tabIndex={0}
    //           role="button"
    //           className="btn btn-ghost lg:hidden text-2xl font-bold"
    //           onClick={toggleDropdown}
    //         >
    //           <RiMenu2Line className="h-8 w-8 text-[#00c194]" />
    //         </div>
    //       ) : (
    //         <div
    //           tabIndex={0}
    //           role="button"
    //           className="btn btn-ghost lg:hidden text-2xl font-bold"
    //           onClick={toggleDropdown}
    //         >
    //           <RiMenu2Line className="h-8 w-8 text-[#00c194]" />
    //         </div>
    //       )}
    //       {isOpen && (
    //         <div
    //           tabIndex={0}
    //           className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
    //         >
    //           {/* Dropdown content */}
    //           {list}
    //         </div>
    //       )}
    //     </div>
    //     <Link to="/" className="  h-12 min-h-12 text-xl">
    //       <img className="h-full" src={logo} alt="" />
    //     </Link>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <div className="menu menu-horizontal px-1 ">{list}</div>
    //   </div>
    //   <div className="navbar-end">
    //     {loading ? (
    //       <span className="loading loading-spinner loading-sm"></span>
    //     ) : user ? (
    //       <div className="flex gap-3 items-center">
    //         <a className="my-anchor-element">
    //           <div
    //             tabIndex={0}
    //             role="button"
    //             className="btn btn-ghost btn-circle avatar"
    //           >
    //             <div className="w-10 rounded-full">
    //               {loading ? (
    //                 <span className="loading loading-spinner loading-sm"></span>
    //               ) : (
    //                 <img alt="User avatar" src={user.photoURL} />
    //               )}
    //             </div>
    //           </div>
    //         </a>
    //         <Tooltip
    //           className="uppercase font-bold"
    //           anchorSelect=".my-anchor-element"
    //           place="left"
    //         >
    //           {user ? user.displayName : "habib"}
    //         </Tooltip>
    //         <button
    //           onClick={handleSignOut}
    //           className="btn bg-[#00c194] text-white font-bold"
    //         >
    //           Logout
    //         </button>
    //       </div>
    //     ) : (
    //       <Link
    //         to="/login"
    //         className="btn bg-[#00c194] text-base hover:bg-[#00c19469] text-white font-bold"
    //       >
    //         Login
    //       </Link>
    //     )}
    //   </div>
    // </div>
    <div className="max-w-7xl m-auto px-5 md:px-10">
      <div className="drawer ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar flex-row-reverse lg:flex-row  w-full">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <RiMenu2Line className=" h-8 w-8 text-[#00c194]" />
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 ">
              <Link to="/" className="  h-12 min-h-12 text-xl">
                <img className="h-full" src={logo} alt="" />
              </Link>
            </div>
            <div className="hidden flex-none lg:block z-50">
              <ul className="menu menu-horizontal">{list}</ul>
              <Link
                to="/login"
                className="btn border-[#00c194] border-2 bg-white text-[#00c194] text-base hover:bg-[#00c194] hover:text-white font-bold hover:border-[#00c194] duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="drawer-side z-50 p-0">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu   min-h-full w-80  bg-white">
            {user && (
              <div className="h-40  flex items-center justify-center">
                <div className=" h-full flex items-center justify-center">
                  {loading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <div className="flex flex-col justify-center items-center">
                      <img
                        alt="User avatar"
                        className=" avatar rounded-full h-20 w-20 object-cover object-center"
                        src={user.photoURL}
                      />
                      <p className="text-[#00c194] font-bold text-xl">
                        {user?.displayName}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {list}
            {user && (
              <button
                onClick={handleSignOut}
                className="btn bg-[#00c194] mt-3 text-white font-bold"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
