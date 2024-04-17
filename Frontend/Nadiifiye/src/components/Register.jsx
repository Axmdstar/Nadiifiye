import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const navigate = useNavigate();

  const { username, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({ username, email, password });
  
      // Send a POST request to the backend to register the user
      const res = await axios.post('http://localhost:4000/auth/register', body, config);
  
      // If successful, set the success message
      setSuccessMessage('Successfully registered!');
      setErrorMessage('');
  
      // Clear the success message after 3 seconds and reset form data
      setTimeout(() => {
        setSuccessMessage('');
        setFormData({
          username: '',
          email: '',
          password: '',
        });
        // Optionally redirect the user or perform other actions
        // navigate('/login');
      }, 3000);
  
    } catch (error) {
      // If there's an error, handle it here
      if (error.response && error.response.data && error.response.data.msg) {
        setErrorMessage(error.response.data.msg);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
      setSuccessMessage('');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Register</h2>
        {successMessage && <div className="text-center text-green-500">{successMessage}</div>}
        {errorMessage && <div className="text-center text-red-500">{errorMessage}</div>}
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Username"
              required
            />
          </div>
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
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded">
              Register
            </button>
          </div>
          <div className="text-center mt-4">
            Already have an account?{' '}
            <Link to="login" className="font-medium text-green-600 hover:underline">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
