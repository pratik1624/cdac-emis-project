import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem("token");

        console.log("Token:", token);

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        console.log("Headers:", config.headers);

        return config;
    },
    (error) => Promise.reject(error)
);

export default api;