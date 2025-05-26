import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-2">Oops! Page not found.</p>
      <p className="text-md text-gray-500 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      {/* <Link to="/">
        <Button className="bg-primary text-white cursor-pointer">
          Go to Homepage
        </Button>
      </Link> */}
    </div>
  );
};

export default NotFoundPage;
