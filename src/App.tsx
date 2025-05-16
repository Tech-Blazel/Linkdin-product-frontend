import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import UserManagement from "./pages/UserManagement";
import AdminProfile from "./pages/AdminProfile";
import Clients from "./pages/Clients";
import LinkedInAuditReport from "./pages/LinkedInAuditReport";
import CategoryManagement from "./pages/CategoryManagement";
import UploadData from "./pages/UploadData";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/user-management"
          element={
            <Layout>
              <UserManagement />
            </Layout>
          }
        />
        <Route
          path="/admin-profile"
          element={
            <Layout>
              <AdminProfile />
            </Layout>
          }
        />
        <Route
          path="/clients"
          element={
            <Layout>
              <Clients />
            </Layout>
          }
        />
        <Route
          path="/linkedin-audit-report"
          element={
            <Layout>
              <LinkedInAuditReport />
            </Layout>
          }
        />
        <Route
          path="/category-management"
          element={
            <Layout>
              <CategoryManagement />
            </Layout>
          }
        />
        <Route
          path="/upload-data"
          element={
            <Layout>
              <UploadData />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
