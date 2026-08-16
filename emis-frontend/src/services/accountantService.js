import axios from "axios";

const API_URL = "http://localhost:8080/accountant";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    Authorization: `Bearer ${token}`,
  };
};

// Accountant
export const getAccountant = async () => {
  const response = await axios.get(API_URL, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

// Students
export const getAccountantStudents = async () => {
  const response = await axios.get(`${API_URL}/students`, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

// Fees
export const getAllFees = async () => {
  const response = await axios.get(`${API_URL}/fees`, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const getFeeByStudent = async (studentId) => {
  const response = await axios.get(`${API_URL}/fees/student/${studentId}`, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const addFee = async (feeData) => {
  const response = await axios.post(`${API_URL}/fees`, feeData, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const updateFee = async (feeId, feeData) => {
  const response = await axios.put(`${API_URL}/fees/${feeId}`, feeData, {
    headers: getAuthHeaders(),
  });

  return response.data;
};

export const deleteFee = async (feeId) => {
  await axios.delete(`${API_URL}/fees/${feeId}`, {
    headers: getAuthHeaders(),
  });
};
