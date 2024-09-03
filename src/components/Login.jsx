import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://sihbackend-production.up.railway.app/api/v1/auth/login",
        {
          username: email, // Map email to username for the API
          password,
        }
      );

      console.log(response.data);
      // Handle successful login, e.g., redirect to dashboard
    } catch (err) {
      setError("Invalid email or password");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-neutral-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-white">
          Sign in to Jobly
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm">
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email" // Correctly name the input field
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 placeholder-neutral-400 text-neutral-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 placeholder-neutral-400 text-neutral-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-neutral-600 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-neutral-300"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-white bg-gradient-to-r from-orange-500 to-orange-800 hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-neutral-400"> Don't have an account?</p>
          <a
            href="#"
            className="font-medium text-orange-600 hover:text-orange-500"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
