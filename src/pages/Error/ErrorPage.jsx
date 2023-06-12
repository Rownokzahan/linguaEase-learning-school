import { Link, useRouteError } from "react-router-dom";
import error404Image from "../../assets/images/error404.png";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  const errorMessage =
    error?.message ||
    "Oops! We couldn't find the page you were looking for. Please check the URL and try again.";

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img className="md:h-96" src={error404Image} alt="Error 404" />

      <div className="max-w-lg text-center">
        <div className="text-6xl font-bold mb-2 w-max mx-auto font-signika">
          {status || 404}
        </div>
        <p className="text-2xl font-bold md:mb-8 font-crimson text-accent_1">
          {errorMessage}
        </p>

        <Link to={"/"}>
          <button className="text-white font-medium border bg-accent_2 rounded px-4 py-1">Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
