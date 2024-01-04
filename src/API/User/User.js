import axiosSecure from ".";

axiosSecure;
export const saveUser = async (user, role) => {
  const userInfo = {
    name: user?.displayName,
    photo: user?.photoURL,
    email: user?.email,
    role: role,
  };
  console.log(userInfo);
  const { data } = await axiosSecure.put(
    `/api/v1/create-user/${user?.email}`,
    userInfo
  );
  return data;
};

export const getUser = async (user) => {
  console.log(user);
  const { data } = await axiosSecure.get(`/api/v1/get-user/${user}`);
  console.log(data);
  return data;
};

export const getToken = async (email) => {
  console.log(email);
  const { data } = await axiosSecure.post(`/api/v1/create-jwt`, email);
  console.log(data);
  return data;
};
