import axios from "axios";

// Global config for axios to handle sending tokens along with requests
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = JSON.parse(localStorage.getItem("localData"));

  if (!token) {
    return config;
  }

  return {
    ...config,
    headers: { Authorization: `Bearer ${token.user.token}` },
  };
});

export default axiosInstance;
