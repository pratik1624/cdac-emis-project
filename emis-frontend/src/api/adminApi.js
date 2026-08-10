import api from "./axios";

// ==============================
// DASHBOARD
// ==============================

export const getAdminDashboard = async () => {
  const response = await api.get("/admin/dashboard");

  return response.data;
};

// ==============================
// STUDENTS
// ==============================

export const getStudents = async () => {
  const response = await api.get("/admin/students");

  return response.data;
};

export const addStudent = async (student) => {
  const response = await api.post("/admin/students", student);

  return response.data;
};

export const updateStudent = async (id, student) => {
  console.log("ID:", id);
  console.log("Student:", student);
  const response = await api.put(`/admin/students/${id}`, student);

  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await api.delete(`/admin/students/${id}`);

  return response.data;
};

// ==============================
// FACULTY
// ==============================

export const getFaculty = async () => {
  const response = await api.get("/admin/faculties");

  return response.data;
};

export const addFaculty = async (faculty) => {
  const response = await api.post("/admin/faculties", faculty);

  return response.data;
};

export const updateFaculty = async (id, faculty) => {
  const response = await api.put(`/admin/faculties/${id}`, faculty);

  return response.data;
};

export const deleteFaculty = async (id) => {
  const response = await api.delete(`/admin/faculties/${id}`);

  return response.data;
};

// ==============================
// DEPARTMENTS
// ==============================

export const getDepartments = async () => {
  const response = await api.get("/admin/departments");

  return response.data;
};

export const addDepartment = async (department) => {
  const response = await api.post("/admin/departments", department);

  return response.data;
};

export const updateDepartment = async (id, department) => {
  const response = await api.put(`/admin/departments/${id}`, department);

  return response.data;
};

export const deleteDepartment = async (id) => {
  const response = await api.delete(`/admin/departments/${id}`);

  return response.data;
};

// ==============================
// SUBJECTS
// ==============================

export const getSubjects = async () => {

    const response = await api.get("/admin/subjects");

    return response.data;

};

export const addSubject = async (subject) => {

    const response = await api.post("/admin/subjects", subject);

    return response.data;

};

export const updateSubject = async (id, subject) => {

    const response = await api.put(

        `/admin/subjects/${id}`,

        subject

    );

    return response.data;

};

export const deleteSubject = async (id) => {

    const response = await api.delete(

        `/admin/subjects/${id}`

    );

    return response.data;

};

// ==============================
// NOTICES
// ==============================

export const getNotices = async () => {
  const response = await api.get("/admin/notices");

  return response.data;
};

export const addNotice = async (notice) => {
  const response = await api.post("/admin/notices", notice);

  return response.data;
};

export const updateNotice = async (id, notice) => {
  const response = await api.put(`/admin/notices/${id}`, notice);

  return response.data;
};

export const deleteNotice = async (id) => {
  const response = await api.delete(`/admin/notices/${id}`);

  return response.data;
};

// ==============================
// RESULTS
// ==============================

export const getResults = async () => {
  const response = await api.get("/admin/results");

  return response.data;
};

//CHANGE PASSWORD
export const changePassword = async (passwordData) => {
  const response = await api.post("/auth/changepassword", passwordData);

  return response.data;
};
