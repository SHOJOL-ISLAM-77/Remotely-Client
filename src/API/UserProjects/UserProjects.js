import axiosSecure from "../User";

export const createProjects = async (data) => {
  const res  = await axiosSecure.post(`/api/v1/create-project`, data);
  return res.data;
};
