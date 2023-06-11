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
import Payment from "../../pages/Dashboard/Student/Payment/Payment";
import EnrolledPrograms from "../../pages/Dashboard/Student/EnrolledPrograms/EnrolledPrograms";
import PaymentHistory from "../../pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";

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
        path: "",
        element: <Dashboard />,
      },
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
            <EnrolledPrograms />
          </StudentRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <StudentRoute>
            <Payment />
          </StudentRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <StudentRoute>
            <PaymentHistory />
          </StudentRoute>
        ),
      },
    ],
  },
]);

export default router;
