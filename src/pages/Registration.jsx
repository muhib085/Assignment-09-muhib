import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

const Registration = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("phot-url");
    const password = form.get("password");

    if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }

    // password validate for Uppercase letter
    const uppercaseRegex = /^(?=.*[A-Z]).+$/;
    if (!uppercaseRegex.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }

    // password validate for lowercase letter
    const lowercaseRegex = /^(?=.*[a-z]).+$/;
    if (!lowercaseRegex.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            toast.error(err.message, {
              position: "top-center",
              autoClose: 5000,
              pauseOnHover: true,
              theme: "colored",
            });
          });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          pauseOnHover: true,
          theme: "colored",
        });
      });
  };

  return (
    <div className="my-12">
      <form onSubmit={handleSubmit} className="flex justify-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-7">
          <p className="text-2xl font-bold text-center">
            Please Register You Account
          </p>

          <label className="label">Name</label>
          <input
            type="text"
            className="input w-xl"
            name="name"
            placeholder="Name"
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input w-xl"
            name="email"
            placeholder="Email"
          />

          <label className="label">Photo-URL</label>
          <input
            type="text"
            className="input w-xl"
            name="phot-url"
            placeholder="Photo-URL"
          />

          <div className="relative">
            <label className="label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="input w-xl"
              name="password"
              placeholder="Password"
            />
            <button
              className="btn btn-xs absolute right-1 top-6"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <button className="btn btn-neutral mt-4">Register</button>
          <p className="my-4 text-center font-medium">
            Have already an account?{" "}
            <Link className="text-red-600 hover:underline" to="/auth/login">
              Please Login.
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Registration;
