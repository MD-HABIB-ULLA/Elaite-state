import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root/Root.jsx";
import Home from "./Layout/Home/Home.jsx";
import Estates from "./Layout/Estates/Estates.jsx";
import Login from "./Layout/Login/Login.jsx";
import Signup from "./Layout/Signup/Signup.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import ErrorPage from "./Layout/ErrorPage/ErrorPage.jsx";
import UpdateProfile from "./Layout/UpdateProfile/UpdateProfile.jsx";
import PrivateRoute from "./Private/PrivateRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "estates",
        element: <Estates />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
