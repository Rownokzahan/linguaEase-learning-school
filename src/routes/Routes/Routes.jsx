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
import InstuctorRoute from "../InstructorRoute";
import AddProgram from "../../pages/Dashboard/Instructor/AddProgram/AddProgram";
import MyPrograms from "../../pages/Dashboard/Instructor/MyPrograms/MyPrograms";
import AdminRoute from "../AdminRoute";
import ManageUsers from "../../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManagePrograms from "../../pages/Dashboard/Admin/ManagePrograms/ManagePrograms";
import ErrorPage from "../../pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontendLayout />,
    errorElement: <ErrorPage/>,
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
      {
        path: "add-program",
        element: (
          <InstuctorRoute>
            <AddProgram />
          </InstuctorRoute>
        ),
      },
      {
        path: "my-programs",
        element: (
          <InstuctorRoute>
            <MyPrograms />
          </InstuctorRoute>
        ),
      },
      {
        path: "manage-programs",
        element: (
          <AdminRoute>
            <ManagePrograms />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
