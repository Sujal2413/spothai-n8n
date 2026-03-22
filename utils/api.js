import axios from 'axios';
import { supabaseUrl, supabaseKey, supabaseSecret } from '../config';

const api = axios.create({
  baseURL: supabaseUrl,
  headers: {
    'Authorization': `Bearer ${supabaseKey}`,
    'Content-Type': 'application/json',
  },
});

const registerUser = async (email: string, password: string, name: string) => {
  try {
    const { data, error } = await api.post('/auth/v1/signup', {
      email,
      password,
      name,
    });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (email: string, password: string) => {
  try {
    const { data, error } = await api.post('/auth/v1/signin', {
      email,
      password,
    });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
};

const getProtectedData = async (token: string) => {
  try {
    const { data, error } = await api.get('/protected', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
};

const validateToken = async (token: string) => {
  try {
    const { data, error } = await api.post('/auth/v1/validate', {
      token,
    });
    if (error) {
      throw error;
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export { registerUser, loginUser, getProtectedData, validateToken };