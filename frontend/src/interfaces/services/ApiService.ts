import axios from 'axios';

const API_BASE_URL = 'http://localhost:3010/api';

export const ApiService = {
  post: async (endpoint: string, data: any) => {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data);
    return response.data;
  }
};