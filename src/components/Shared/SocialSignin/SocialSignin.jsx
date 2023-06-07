import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";

const SocialSignin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="relative mt-12 mb-6">
        <hr className="border-b mx-auto w-32" />
        <span className="bg-white text-gray-500 px-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          OR
        </span>
      </div>

      <div className="text-center ">
        <button
          onClick={handleGoogleSignin}
          className="border rounded-md shadow w-80 py-2 flex items-center gap-2 justify-center mx-auto"
        >
          <span className="font-semibold">Continue with</span>
          <FcGoogle className="text-xl mt-1" />
        </button>
      </div>
    </>
  );
};

export default SocialSignin;
