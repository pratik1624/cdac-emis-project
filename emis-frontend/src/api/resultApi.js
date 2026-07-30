import api from "./axios";

export const getResults = async () => {

    const response = await api.get("/student/results");

    return response.data;

};