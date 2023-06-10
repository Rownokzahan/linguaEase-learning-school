import axios from "axios";
import { toast } from "react-hot-toast";

export const addToSelecedPrograms = (program, user) => {
  const selectedItem = { email: user?.email, programId: program?._id };

  axios
    .post(`${import.meta.env.VITE_API_URL}/selected-programs`, selectedItem)
    .then((res) => {
      if (res?.data?.insertedId) {
        toast.success("Program selected successfully!");
      }
      if (res?.data?.message === "already exists") {
        toast.error("You have already selected this program!");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
