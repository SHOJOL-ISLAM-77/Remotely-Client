import useAxiosPublic from "../Hooks/useAxiosPublic";

export const ImageUpload = async (image) => {
  const axiosPublic = useAxiosPublic();

  const formData = new FormData();
  formData.append("image", image);

  const { data } = await axiosPublic.post(
    `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMAGE_BB_API_KEY
    }`,
    formData
  );
  console.log(data);
  return data;
};
