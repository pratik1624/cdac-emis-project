import api from "./axios";

// Get all fee records
export const getAllFees = async () => {
  const response = await api.get("/accountant/fees");
  return response.data;
};

// Get fee details of a student
export const getFeeByStudent = async (studentId) => {
  const response = await api.get(`/accountant/fees/student/${studentId}`);

  return response.data;
};

// Add fee
export const addFee = async (feeData) => {
  const response = await api.post("/accountant/fees", feeData);

  return response.data;
};

// Update fee
export const updateFee = async (feeId, feeData) => {
  const response = await api.put(`/accountant/fees/${feeId}`, feeData);

  return response.data;
};

// Delete fee
export const deleteFee = async (feeId) => {
  const response = await api.delete(`/accountant/fees/${feeId}`);

  return response.data;
};
