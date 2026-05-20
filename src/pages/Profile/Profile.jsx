import { useContext } from "react";

import { Link } from "react-router-dom";

import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="card bg-base-100 shadow-2xl w-full max-w-md">

        <div className="card-body items-center text-center">

          <img
            src={user?.photoURL}
            alt="profile"
            className="w-28 h-28 rounded-full mb-4"
          />

          <h2 className="text-3xl font-bold">
            {user?.displayName}
          </h2>

          <p className="text-lg mt-2">
            {user?.email}
          </p>

          <Link to="/update-profile">

            <button className="btn btn-primary mt-6">
              Update Information
            </button>

          </Link>

        </div>

      </div>

    </div>
  );
};

export default Profile;