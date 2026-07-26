import api from "./axios";

export const getAllNotices = async () => {
    const response = await api.get("/notice");
    return response.data;
};

export const createNotice = async (notice) => {
    const response = await api.post("/notice", notice);
    return response.data;
};
