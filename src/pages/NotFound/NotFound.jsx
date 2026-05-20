import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      <h1 className="text-8xl font-bold text-error">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="mt-3 text-gray-500">
        Oops! The page you are looking for does not exist.
      </p>

      <Link to="/">

        <button className="btn btn-primary mt-6">
          Back To Home
        </button>

      </Link>

    </div>
  );
};

export default NotFound;