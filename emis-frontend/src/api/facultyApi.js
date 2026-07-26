import api from "./axios";

export const getFacultyProfile = async () => {
    const response = await api.get("/faculty/profile");
    return response.data;
};

export const getFacultyStudents = async () => {
    const response = await api.get("/faculty/students");
    return response.data;
};

export const addAttendance = async (attendance) => {
    const response = await api.post("/faculty/attendance", attendance);
    return response.data;
};