import { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import image from "../../../assets/images/sign-in.avif";
import { useForm } from "react-hook-form";
import { ImEye } from "react-icons/im";
import { RiEyeCloseLine } from "react-icons/ri";
import SocialSignin from "../../../components/Shared/SocialSignin/SocialSignin";
import Container from "../../../components/Container";
import { saveUserToDB } from "../../../api/auth";

const Register = () => {
  const { signUp, setUserInfo } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");
  const navigate = useNavigate();

  const handleRegister = (data) => {
    setErrorMessage("");
    const { name, photo_url, email, password } = data;

    signUp(email, password)
      .then(() => {
        setUserInfo(name, photo_url)
          .then(() => {
            //save user info to the database
            saveUserToDB(name, email, photo_url);

            reset();
            navigate("/login");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <Container>
      <div className="grid md:grid-cols-2 items-center my-10">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="px-4 py-8 md:px-8 border">
          <div className="text-center text-3xl font-medium mb-2">Register</div>

          <p className="text-red-600 text-center mb-8 font-semibold">
            {errorMessage}
          </p>

          <form
            onSubmit={handleSubmit(handleRegister)}
            className="flex flex-col space-y-8"
          >
            <div className="relative">
              <input
                type="text"
                name="name"
                {...register("name", { required: true, maxLength: 20 })}
                id="name"
                placeholder="Name"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="text-red-600 italic text-sm">
                  Name is required
                </span>
              )}
              <label
                htmlFor="name"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="text-red-600 italic text-sm">Email is required</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="text-red-600 italic text-sm">
                  Invalid email address
                </p>
              )}
              <label
                htmlFor="email"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                name="photo_url"
                id="photo_url"
                placeholder="Photo Url"
                className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                {...register("photo_url", { required: true })}
              />
              {errors.photo_url && errors.photo_url.type === "required" && (
                <p className="text-red-600 italic text-sm">
                  Photo url is required
                </p>
              )}
              <label
                htmlFor="photo_url"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Photo Url
              </label>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-4 cursor-pointer"
              >
                {showPassword ? <ImEye /> : <RiEyeCloseLine />}
              </span>
              {errors.password?.type === "required" && (
                <p className="text-red-600 italic text-sm">
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 italic text-sm">
                  Include at least 6 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <div className="text-red-600 italic text-sm">
                  <ul>
                    <li>Include at least 1 uppercase letter</li>
                    <li>Include at least 1 special character</li>
                  </ul>
                </div>
              )}

              <label
                htmlFor="password"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Password
              </label>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm password"
                className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === password.current || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-600 italic text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
              <label
                htmlFor="confirmPassword"
                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
              >
                Confirm password
              </label>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="bg-accent_2 py-3 font-semibold rounded text-white w-full"
              >
                Register
              </button>
            </div>
            <p className="text-center mt-6 text-sm">
              Already have an account?
              <Link
                to="/login"
                className="ml-1 font-medium text-primary underline-offset-4 hover:underline"
              >
                Log in
              </Link>
            </p>
          </form>
          <SocialSignin />
        </div>
      </div>
    </Container>
  );
};

export default Register;
