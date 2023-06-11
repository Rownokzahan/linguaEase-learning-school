import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle";
import { SiGoogleclassroom } from "react-icons/si";
import useAuth from "../../../../hooks/useAuth";
import { FaCircleNotch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProgram = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [loading, setLoading] = useState(false);
  const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);

    // upload image
    const formData = new FormData();
    formData.append("image", data.displayImage[0]);
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imageUrl = imgResponse.data.display_url;

          const program = {
            ...data,
            displayImage: imageUrl,
            price: parseFloat(data.price),
            available_seats: parseInt(data.available_seats),
            duration: parseInt(data.duration),
          };

          // save program to database
          axiosSecure
            .post(`/programs`, program)
            .then((data) => {
              if (data.data.insertedId) {
                reset();
                toast.success("Program Added Successfully!");
                navigate("/dashboard/my-programs");
              }
              setLoading(false);
            })
            .catch((error) => {
              console.log(error);
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>LinguaEase | Add Program</title>
      </Helmet>
      <div className="py-12">
        <SectionTitle label={"Add A Program"} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3xl mx-auto p-12 border border-accent_2 rounded-md shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="instructor">
                Instructor
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="Instructor Name"
                {...register("instructor", { required: true })}
                id="instructor"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-green-200  focus:outline-gray-300 focus:outline-2 outline-gray-300"
                readOnly
              />
              {errors.instructor && (
                <span className="text-red-500">
                  Instructor name is required
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="instructor_email">
                Email
              </label>
              <input
                type="text"
                defaultValue={user?.email}
                placeholder="Instructor Email"
                {...register("instructor_email", { required: true })}
                id="instructor_email"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-green-200  focus:outline-gray-300 focus:outline-2 outline-gray-300"
                readOnly
              />
              {errors.instructor_email && (
                <span className="text-red-500">
                  Instructor email is required
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="title">
                Program Name
              </label>
              <input
                type="text"
                placeholder="Program Name"
                {...register("title", { required: true })}
                id="title"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-green-200  focus:outline-gray-300 focus:outline-2 outline-gray-300"
              />
              {errors.title && (
                <span className="text-red-500">Program name is required</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="displayImage">
                Program Image
              </label>
              <input
                type="file"
                accept="image/*"
                {...register("displayImage", { required: true })}
                id="displayImage"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-green-200  focus:outline-gray-300 focus:outline-2 outline-gray-300"
              />
              {errors.displayImage && (
                <span className="text-red-500">Program image is required</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="level">
                Level
              </label>
              <select
                name="level"
                defaultValue={""}
                {...register("level", { required: true })}
                id="level"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-green-200  focus:outline-gray-300 focus:outline-2 outline-gray-300"
              >
                <option disabled value={""}>
                  -- Choose a level --
                </option>
                <option value={"beginner"}>Beginner</option>
                <option value={"intermediate"}>Intermediate</option>
                <option value={"advanced"}>Advanced</option>
              </select>
              {errors.level && (
                <span className="text-red-500">Level is required</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="duration">
                Duration (weeks)
              </label>
              <input
                type="number"
                placeholder="Duration"
                {...register("duration", { min: 1, required: true })}
                id="duration"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-green-200  focus:outline-gray-300 focus:outline-2 outline-gray-300"
              />
              {errors.duration && errors.duration.type === "required" && (
                <span className="text-red-500">Duration is required</span>
              )}
              {errors.duration && errors.duration.type === "min" && (
                <span className="text-red-500">
                  Duration can&apos;t be less than 1 week
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="available_seats">
                Available seats
              </label>
              <input
                type="number"
                placeholder="Available seats"
                {...register("available_seats", { min: 1, required: true })}
                id="available_seats"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-green-200  focus:outline-gray-300 focus:outline-2 outline-gray-300"
              />
              {errors.available_seats &&
                errors.available_seats.type === "required" && (
                  <span className="text-red-500">
                    Avaiable seats is required
                  </span>
                )}
              {errors.available_seats &&
                errors.available_seats.type === "min" && (
                  <span className="text-red-500">
                    Avaiable seats can&apos;t be less than 1
                  </span>
                )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium" htmlFor="price">
                Price
              </label>
              <input
                type="number"
                step="0.0001"
                placeholder="Price"
                {...register("price", { min: 0, required: true })}
                id="price"
                className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-green-200  focus:outline-gray-300 focus:outline-2 outline-gray-300"
              />
              {errors.price && errors.price.type === "required" && (
                <span className="text-red-500">Price is required</span>
              )}
              {errors.price && errors.price.type === "min" && (
                <span className="text-red-500">
                  Price can&apos;t be negative
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-accent_2 mt-8 text-white py-3 px-8 font-medium rounded flex items-center gap-2 mx-auto"
          >
            Add Program
            {loading ? (
              <FaCircleNotch className="animate-spin" />
            ) : (
              <SiGoogleclassroom />
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProgram;
