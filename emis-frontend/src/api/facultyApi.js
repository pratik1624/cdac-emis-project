import api from "./axios";

// ==============================
// DASHBOARD
// ==============================

export const getFacultyDashboard = async () => {
  const response = await api.get("/faculty/dashboard");

  return response.data;
};

// ==============================
// PROFILE
// ==============================

export const getFacultyProfile = async () => {
  const response = await api.get("/faculty/profile");

  return response.data;
};

export const updateFacultyProfile = async (id, data) => {
  const response = await api.put(
    `/faculty/profile/${id}`,

    data,
  );

  return response.data;
};

// ==============================
// SUBJECTS
// ==============================

export const getAssignedSubjects = async () => {
  const response = await api.get("/faculty/subjects");

  return response.data;
};

export const getSubjectMarks = async (subjectId) => {
  const response = await api.get(`/faculty/subjects/${subjectId}/marks`);

  return response.data;
};

export const saveMarks = async (subjectId, data) => {
  const response = await api.put(
    `/faculty/subjects/${subjectId}/marks`,

    data,
  );

  return response.data;
};

// ==============================
// STUDENTS
// ==============================

export const getDepartmentStudents = async (semester) => {
  const response = await api.get(
    "/faculty/students",

    {
      params: {
        semester,
      },
    },
  );

  return response.data;
};

export const getStudentProfile = async (id) => {
  const response = await api.get(`/faculty/student/${id}`);

  return response.data;
};

// ==============================
// ATTENDANCE
// ==============================

export const loadStudentsForAttendance = async (request) => {
  const response = await api.post(
    "/faculty/attendance/loadstudents",

    request,
  );

  return response.data;
};

export const uploadAttendance = async (request) => {
  const response = await api.post(
    "/faculty/attendance/upload",

    request,
  );

  return response.data;
};

// ==============================
// NOTICES
// ==============================

export const getNotices = async () => {
  const response = await api.get("/faculty/notices");

  return response.data;
};

// ==============================
// Subject
// ==============================
export const getSubjects = async () => {
  const response = await api.get("/faculty/subjects");
  return response.data;
};
