import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { HiMenu, HiMoon, HiSun } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Container from "../../Container";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);
  const [control, setControl] = useState(true);

  useEffect(() => {
    const isDark = localStorage.getItem("isDark");
    if (isDark === "true") {
      document.getElementById("body").classList.add("dark");
    } else {
      document.getElementById("body").classList.remove("dark");
    }
  }, [darkMode, control]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("isDark", newDarkMode);
    setControl(!control);
  };

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
      {user && <ActiveLink to="/dashboard">Dashboard</ActiveLink>}

      <button onClick={toggleDarkMode}>
        {darkMode ? (
          <HiSun className="text-xl" />
        ) : (
          <HiMoon className="text-xl" />
        )}
      </button>
    </>
  );

  const userLinks = (
    <>
      {user ? (
        <>
          <img
            src={user.photoURL}
            alt=""
            className="w-7 h-7 object-cover rounded-full border-2 cursor-pointer"
          />

          <button
            onClick={handleLogout}
            className="bg-accent_2 py-1 px-2 rounded"
          >
            Logout
          </button>
        </>
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
          <div className="flex justify-between items-center py-4 font-medium">
            <Link to="/">
              <Logo />
            </Link>
            <div className="flex items-center gap-6 lg:gap-12">{navLinks}</div>
            <div className="flex items-center gap-6">{userLinks}</div>
          </div>
        </Container>
      </nav>

      {/* Navbar for smaller screens */}
      <nav className="md:hidden relative shadow mb-10">
        <Container>
          <div className="flex justify-between items-center py-6">
            <Link to="/">
              <Logo />
            </Link>
            {!showMenu && (
              <button onClick={() => setShowMenu(true)}>
                <HiMenu className="text-2xl text-accent_2" />
              </button>
            )}
            <div className="flex gap-4 items-center">{userLinks}</div>
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
