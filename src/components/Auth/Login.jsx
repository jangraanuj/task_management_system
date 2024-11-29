import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="border border-gray-700 rounded-2xl p-10 shadow-lg bg-gray-800 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Welcome Back</h2>
        <form 
          onSubmit={submitHandler}
          className="flex flex-col space-y-5"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-gray-700 text-white border border-gray-600 font-medium text-base py-3 px-5 rounded-lg placeholder-gray-400 focus:ring focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-gray-700 text-white border border-gray-600 font-medium text-base py-3 px-5 rounded-lg placeholder-gray-400 focus:ring focus:ring-red-500 focus:border-red-500 transition duration-200"
            type="password"
            placeholder="Enter password"
          />
          <button
            className="mt-5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            type="submit"
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-gray-400 mt-6 text-center">
          Don't have an account?{' '}
          <a href="#" className="text-emerald-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
