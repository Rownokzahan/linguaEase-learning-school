import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-accent_2 font-bold whitespace-nowrap"
          : "hover:text-seconadary whitespace-nowrap"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
