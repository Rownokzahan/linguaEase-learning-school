import axios from "axios";

// save a user to database
export const saveUserToDB = (name, email, imageUrl) => {
  const user = { name, email, imageUrl };
  axios
    .post(`${import.meta.env.VITE_API_URL}/users`, user)
    .then(() =>{})
    .catch((error) => {
      console.log(error);
    });
};
