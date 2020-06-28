import axios from "axios";

// Global config for axios to handle sending tokens along with requests
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = "get token from offline store";

  if (!token) {
    return config;
  }

  return {
    ...config,
    headers: { Authorization: `Bearer ${token}` },
  };
});

export default axiosInstance;
