import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AdminProfile = () => {
  const initialValues = {
    email: "akash.rdec18@gmail.com",
    firstName: "Akash",
    lastName: "Sharma",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .min(6, "Min 6 characters")
      .required("New password is required"),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword")], "Passwords must match")
      .required("Confirm new password is required"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    //   Trigger Update API here
    console.log("Form Submitted:", values);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow w-full mx-auto">
      <h2 className="text-lg font-semibold mb-6">Admin Profile</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email address
            </label>
            <Field
              name="email"
              type="email"
              disabled
              className="w-full border px-3 py-2 rounded bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name
              </label>
              <Field
                name="firstName"
                className="w-full border px-3 py-2 rounded"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <Field
                name="lastName"
                className="w-full border px-3 py-2 rounded"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          <hr className="my-4" />

          <div className="space-y-4">
            <h3 className="text-md font-semibold">Change Password</h3>

            <div>
              <label className="block text-sm font-medium mb-1">
                Current Password
              </label>
              <Field
                name="currentPassword"
                type="password"
                className="w-full border px-3 py-2 rounded"
              />
              <ErrorMessage
                name="currentPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                New Password
              </label>
              <Field
                name="newPassword"
                type="password"
                className="w-full border px-3 py-2 rounded"
              />
              <ErrorMessage
                name="newPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Confirm New Password
              </label>
              <Field
                name="confirmNewPassword"
                type="password"
                className="w-full border px-3 py-2 rounded"
              />
              <ErrorMessage
                name="confirmNewPassword"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-2 rounded hover:bg-primary-hover transition"
            >
              Change Password
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AdminProfile;
