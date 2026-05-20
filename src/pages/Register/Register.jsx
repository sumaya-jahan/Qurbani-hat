import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../providers/AuthProvider";

import { toast } from "react-toastify";

const Register = () => {

  const { createUser, googleLogin, updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleRegister = (e) => {

    e.preventDefault();

    setError("");

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    createUser(email, password)
      .then(() => {

        updateUser(name, photo)
          .then(() => {

            toast.success("Registration Successful!");

            navigate("/login");

          });

      })
      .catch((error) => {

        setError(error.message);
      });

  };

  const handleGoogleLogin = () => {

    googleLogin()
      .then(() => {

        toast.success("Google Login Successful!");

        navigate("/");
      })
      .catch((error) => {

        setError(error.message);
      });

  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      <div className="card bg-base-100 w-full max-w-md shadow-2xl">

        <div className="card-body">

          <h1 className="text-4xl font-bold text-center mb-6">
            Register Now
          </h1>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full mb-4"
              required
            />

            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full mb-4"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full mb-4"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
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
              Register
            </button>

          </form>

          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full mt-4"
          >
            Continue With Google
          </button>

          <p className="text-center mt-4">

            Already have an account?

            <Link
              to="/login"
              className="text-primary font-bold ml-2"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;