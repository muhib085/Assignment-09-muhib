import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Registration = () => {
  const { createNewUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("phot-url");
    const password = form.get("password");
    console.log(name, photo);

    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error.message);
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

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-xl"
            name="password"
            placeholder="Password"
          />
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
