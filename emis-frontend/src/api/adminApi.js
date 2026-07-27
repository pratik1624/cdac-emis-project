import api from "./axios";

export const getAllStudents = async () => {
    const response = await api.get("/admin/students");
    return response.data;
};

export const getAllFaculty = async () => {
    const response = await api.get("/admin/faculty");
    return response.data;
};

export const createStudent = async (student) => {
    const response = await api.post("/admin/student", student);
    return response.data;
};

export const createFaculty = async (faculty) => {
    const response = await api.post("/admin/faculty", faculty);
    return response.data;
};