import api from "./axios";

// ---------------- PROFILE ----------------

export const getFacultyProfile = async () => {
    const response = await axiosInstance.get("/faculty/profile");
    return response.data;
};

export const updateFacultyProfile = async (id, data) => {
    const response = await axiosInstance.put(`/faculty/profile/${id}`, data);
    return response.data;
};

// ---------------- STUDENTS ----------------

export const getDepartmentStudents = async (semester) => {
    const response = await axiosInstance.get("/faculty/students", {
        params: { semester }
    });
    return response.data;
};

export const getStudentProfile = async (id) => {
    const response = await axiosInstance.get(`/faculty/student/${id}`);
    return response.data;
};

// ---------------- SUBJECTS ----------------

export const getSubjects = async () => {
    const response = await axiosInstance.get("/faculty/subjects");
    return response.data;
};

export const getSubjectMarks = async (subjectId) => {
    const response = await axiosInstance.get(`/faculty/subjects/${subjectId}/marks`);
    return response.data;
};

export const saveMarks = async (subjectId, data) => {
    const response = await axiosInstance.put(
        `/faculty/subjects/${subjectId}/marks`,
        data
    );
    return response.data;
};

// ---------------- ATTENDANCE ----------------

export const loadStudentsForAttendance = async (data) => {
    const response = await axiosInstance.post(
        "/faculty/attendance/loadstudents",
        data
    );
    return response.data;
};

export const uploadAttendance = async (data) => {
    const response = await axiosInstance.post(
        "/faculty/attendance/upload",
        data
    );
    return response.data;
};

export const getFacultyDashboard = async () => {

    const response = await axiosInstance.get(

        "/faculty/dashboard"

    );

    return response.data;

};