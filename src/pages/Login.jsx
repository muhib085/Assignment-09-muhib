import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);

  const [error, setError] = useState({});

  const location = useLocation();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.message });
      });
  };
  return (
    <div className="my-12">
      <form onSubmit={handleLogin} className="flex justify-center">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-7">
          <p className="text-2xl font-bold text-center">Please Login</p>

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-xl"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-xl"
            placeholder="Password"
          />

          {error.login && <p className="text-red-500">{error.login}</p>}

          <span>
            <Link className="my-4 hover:underline hover:font-medium">
              Forgat Password?
            </Link>
          </span>
          <button className="btn btn-neutral">Login</button>
          <p className="my-4 text-center font-medium">
            New to this website?
            <Link
              className="text-red-600 hover:underline"
              to="/auth/registration"
            >
              Please Register.
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
