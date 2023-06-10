import { createBrowserRouter } from "react-router-dom";
import FrontendLayout from "../../layouts/FrontendLayout";
import Register from "../../pages/Auth/Register/Register";
import Login from "../../pages/Auth/Login/Login";
import Home from "../../pages/Frontend/Home/Home";
import Instructors from "../../pages/Frontend/Instructors/Instructors";
import Programs from "../../pages/Frontend/Programs/Programs";
import DashboardLayout from "../../layouts/DashboardLayout";
import PrivateRoute from "../PrivateRoute";
import StudentRoute from "../StudentRoute";
import SelectedPrograms from "../../pages/Dashboard/Student/SelectedPrograms/SelectedPrograms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "selected-programs",
        element: (
          <StudentRoute>
            <SelectedPrograms />
          </StudentRoute>
        ),
      },
      {
        path: "enrolled-programs",
        element: (
          <StudentRoute>
            <SelectedPrograms />
          </StudentRoute>
        ),
      },
    ],
  },
]);

export default router;
