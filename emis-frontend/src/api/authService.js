import api from "./axios";

// Login
export const login = async (credentials) => {
    const response = await api.post("/auth/signin", credentials);
    return response.data;
};

// Signup (Testing)
export const signup = async (user) => {
    const response = await api.post("/auth/signup", user);
    return response.data;
};

// Profile
export const getProfile = async () => {
    const response = await api.get("/auth/profile");
    return response.data;
};

// Change Password
export const changePassword = async (passwordData) => {
    const response = await api.post("/auth/changepassword", passwordData);
    return response.data;
};