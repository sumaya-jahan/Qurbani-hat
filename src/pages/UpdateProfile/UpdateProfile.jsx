import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { AuthContext } from "../../providers/AuthProvider";

const UpdateProfile = () => {

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleUpdate = (e) => {

    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;

    updateUser(name, photo)
      .then(() => {

        toast.success("Profile Updated Successfully!");

        navigate("/my-profile");

      })
      .catch((error) => {

        setError(error.message);
      });

  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="card bg-base-100 shadow-2xl w-full max-w-md">

        <div className="card-body">

          <h1 className="text-4xl font-bold text-center mb-6">
            Update Profile
          </h1>

          <form onSubmit={handleUpdate}>

            <input
              type="text"
              name="name"
              placeholder="New Name"
              className="input input-bordered w-full mb-4"
              required
            />

            <input
              type="text"
              name="photo"
              placeholder="New Photo URL"
              className="input input-bordered w-full mb-4"
              required
            />

            {
              error && (
                <p className="text-red-500 mb-3">
                  {error}
                </p>
              )
            }

            <button className="btn btn-primary w-full">
              Update Information
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default UpdateProfile;