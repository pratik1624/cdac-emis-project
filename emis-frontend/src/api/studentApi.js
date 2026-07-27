import api from "./axios";

export const getStudentProfile = async () => {
    const response = await api.get("/student/profile");
    return response.data;
};

export const getAttendance = async () => {
    const response = await api.get("/student/attendance");
    return response.data;
};

export const getResults = async () => {
    const response = await api.get("/student/results");
    return response.data;
};

export const getTimetable = async () => {
    const response = await api.get("/student/timetable");
    return response.data;
};