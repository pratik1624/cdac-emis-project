import axios from "axios";

const API_URL = "http://localhost:8080/api/fees";

export const getAllFees = () => {
  return axios.get(API_URL);
};

export const addFee = (feeData) => {
  return axios.post(API_URL, feeData);
};

export const updateFee = (feeId, data) => {
  return axios.put(`${API_URL}/${feeId}`, data);
};

export const getFeeByStudent = (studentId) => {
  return axios.get(`${API_URL}/student/${studentId}`);
};

export const deleteFee = (feeId) => {
  return axios.delete(`${API_URL}/${feeId}`);
};
