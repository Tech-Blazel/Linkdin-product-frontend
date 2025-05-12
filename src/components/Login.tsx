import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logoImage from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg my-20 mx-4">
        <div className="flex flex-col items-center mb-8">
          <img
            src={logoImage}
            alt="Blazel Logo"
            className="w-[180px] h-[70px] object-contain mb-8"
          />
          <h1 className="text-[2rem] text-gray-800">Welcome Back</h1>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-700"
                >
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  className="mt-1 w-full rounded-md border border-gray-300 p-3"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-gray-700"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  className="mt-1 w-full rounded-md border border-gray-300 p-3"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary text-white font-bold hover:bg-primary-hover transition p-3 cursor-pointer"
              >
                Log In
              </button>
            </Form>
          )}
        </Formik>
        <div className="mt-6 text-center">
          <Link
            to="/forget-password"
            className="text-base text-primary hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
        <div className="mt-4 text-center text-base">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </div>
        <div className="mt-4 text-center text-base">
          Didn't receive verification email?{" "}
          <Link to="/forget-password" className="text-primary hover:underline">
            Resend it
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
