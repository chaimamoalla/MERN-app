import axios from 'axios';

// Set the base URL of your backend API
const API_URL = 'http://localhost:5000/api/users';

// Function to handle signup API call
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data; // This will return { message: 'User created successfully' }
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};

// Function to handle login API call
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data; // This will return { message: 'Login successful', user }
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};
