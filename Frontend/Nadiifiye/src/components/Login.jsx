import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
     await axios.post('http://localhost:4000/auth/login', {
        email: email,
        password: password,
      });
      
      // Assuming the response includes a token you might want to store for future requests
      // localStorage.setItem('token', response.data.token);

      // On successful login, redirect to the Home page
      navigate('/home');
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Login error', error.response ? error.response.data : 'Error');
      // Here you could set an error state and display it to the user
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <div>
              <button type="submit" className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded">
                Sign in
              </button>
            </div>
            <div>
              <Link to="../forgot-password" className="font-medium text-sm text-green-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
