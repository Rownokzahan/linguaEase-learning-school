import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import image from "../../../assets/images/sign-in.avif";
import { useForm } from "react-hook-form";
import { ImEye } from "react-icons/im";
import { RiEyeCloseLine } from "react-icons/ri";

const Login = () => {
  const { login } = useContext(AuthContext);
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
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignIn = (data) => {
    setErrorMessage("");
    const { email, password } = data;

    login(email, password)
      .then(() => {
        reset();
        navigate(from);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="grid md:grid-cols-2 items-center my-10">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col mx-auto w-full p-6">
        <div className="text-center text-3xl font-medium mb-2">Sign in</div>

        <p className="text-red-600 text-center font-semibold mb-8">
          {errorMessage}
        </p>

        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-8">
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
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-2 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600 italic text-sm">
                Password is required
              </p>
            )}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-4 cursor-pointer"
            >
              {showPassword ? <ImEye /> : <RiEyeCloseLine />}
            </span>
            <label
              htmlFor="password"
              className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
            >
              Password
            </label>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="bg-secondary py-3 font-semibold rounded-md text-white w-full"
            >
              Sign In
            </button>
          </div>
          <p className="text-center mt-6">
            Don&apos;t have an account?
            <Link
              to="/register"
              className="ml-1 font-medium text-primary underline-offset-4 hover:underline"
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
