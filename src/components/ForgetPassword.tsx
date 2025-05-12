import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import logoImage from "../assets/images/logo.png";
import { Link } from "react-router";

const ForgetPassword: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg my-20 flex flex-col mx-4">
        <div className="flex flex-col items-center mb-8">
          <img
            src={logoImage}
            alt="Blazel Logo"
            className="w-[180px] h-[70px] object-contain mb-8"
          />
          <h1 className="text-[2rem] mb-6 text-gray-800">Forgot Password</h1>
          <p className="text-center">
            Enter your email address to receive a password reset link.
          </p>
        </div>
        <Formik
          initialValues={{ email: "" }}
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
              <button
                type="submit"
                className="w-full rounded-md bg-primary text-white font-bold hover:bg-primary-hover transition p-3 cursor-pointer"
              >
                Send Reset Link
              </button>
            </Form>
          )}
        </Formik>
        <Link
          to="/"
          className="rounded-md bg-transparent border border-gray-500 hover:bg-gray-500 hover:text-white text-gray-700 transition p-1.5 cursor-pointer text-center mt-4"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
