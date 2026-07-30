import api from "./axios";

export const getAttendance = async () => {

    const response = await api.get("/student/attendance");

    return response.data;

};