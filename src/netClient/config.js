import axios from "axios";

const netClient = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 10000,
});

netClient.interceptors.request.use(
  (request) => {
    const { token } = localStorage;
    if (token) {
      request.headers = {
        "Content-Type": "application/json",
        token: token,
      };
    }
    return request;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default netClient;
