import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { HiMenu } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Container from "../../Container";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showUserLinks, setShowUserLinks] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/programs">Programs</ActiveLink>
      <ActiveLink to="/instructors">Instructors</ActiveLink>
    </>
  );

  const userLinksJSX = (
    <>
      {user ? (
        <div className="relative">
          <img
            src={user.photoURL}
            alt=""
            className="w-6 h-6 object-cover rounded-full border-2 cursor-pointer"
            onClick={() => setShowUserLinks(!showUserLinks)}
          />
          {showUserLinks && (
            <div className="absolute z-20 bg-white font-medium right-2 top-8 flex flex-col gap-2 border p-3 rounded-md rounded-se-none">
              <Link className="p-2">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="bg-accent_2 py-1 px-2 rounded"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login" className="bg-accent_2 py-1 px-2 rounded">
          Login
        </Link>
      )}
    </>
  );

  return (
    <>
      {/* Navbar for bigger screens */}
      <nav className="hidden md:block shadow mb-10">
        <Container>
          {" "}
          <div className="flex justify-between items-center py-8 font-medium">
            <div>
              <Link to="/">Logo</Link>
            </div>
            <div className="flex gap-6 lg:gap-12">{navLinks}</div>
            {userLinksJSX}
          </div>
        </Container>
      </nav>

      {/* Navbar for smaller screens */}
      <nav className="md:hidden relative shadow mb-10">
        <Container>
          {" "}
          <div className="flex justify-between items-center py-6">
            <div>
              <Link to="/">Logo</Link>
            </div>
            {!showMenu && (
              <button onClick={() => setShowMenu(true)}>
                <HiMenu className="text-2xl text-accent_2" />
              </button>
            )}
            {userLinksJSX}
          </div>
          {/* Hidden Menu */}
          <div
            className={`${
              showMenu
                ? "absolute top-16 left-0 right-0 bg-black text-gray-500 z-10 duration-500 border shadow-md"
                : "absolute -top-72"
            }`}
          >
            <div className="relative p-2 font-medium">
              <button onClick={() => setShowMenu(false)}>
                <HiOutlineXMark className="absolute top-2 right-2 text-2xl text-gray-500" />
              </button>
              <div className="flex flex-col mb-2 space-y-2">{navLinks}</div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
