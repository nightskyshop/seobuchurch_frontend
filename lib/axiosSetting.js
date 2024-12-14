import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
