import { RouteObject } from "react-router-dom";
import Layout from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import UserManagement from "@/pages/UserManagement";
import AdminProfile from "@/pages/AdminProfile";
import Clients from "@/pages/Clients";
import LinkedInAuditReport from "@/pages/LinkedInAuditReport";
import CategoryManagement from "@/pages/CategoryManagement";
import UploadData from "@/pages/UploadData";
import Login from "@/components/Login";
import SignUp from "@/components/Signup";
import ForgetPassword from "@/components/ForgetPassword";

const routes: RouteObject[] = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <SignUp /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  {
    element: <Layout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/user-management", element: <UserManagement /> },
      { path: "/admin-profile", element: <AdminProfile /> },
      { path: "/clients", element: <Clients /> },
      { path: "/linkedin-audit-report", element: <LinkedInAuditReport /> },
      { path: "/category-management", element: <CategoryManagement /> },
      { path: "/upload-data", element: <UploadData /> },
    ],
  },
];

export default routes;
