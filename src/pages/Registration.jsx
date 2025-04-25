import React from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div className="my-12">
        <form className="flex justify-center">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-7">
            <p className="text-2xl font-bold text-center">
              Please Register You Account
            </p>

            <label className="label">Name</label>
            <input type="text" className="input w-xl" placeholder="Name" />

            <label className="label">Email</label>
            <input type="email" className="input w-xl" placeholder="Email" />

            <label className="label">Photo-URL</label>
            <input type="text" className="input w-xl" placeholder="Photo-URL" />

            <label className="label">Password</label>
            <input
              type="password"
              className="input w-xl"
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
    </div>
  );
};

export default Registration;
