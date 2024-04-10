import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(Authcontext);
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg m-auto"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
