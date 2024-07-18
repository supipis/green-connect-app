import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use(
  (config) => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (auth) {
      config.headers["Authorization"] = `Basic ${auth}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
