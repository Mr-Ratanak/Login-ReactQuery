// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const login = async (data) => {
  const response = await axios.get(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.data;
};

export const fetchAllCustomer = async (data) => {
    const response = await axios.get(`${API_URL}/v1/customers/list`, data);
    return response.data;
  };
export const createCustomer = async (data) => {
  const response = await axios.post(`${API_URL}/v1/customers/`, data);
  return response.data;
};
