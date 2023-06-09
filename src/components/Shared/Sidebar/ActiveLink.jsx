import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, icon: Icon, badge = "", label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "border-r-4 border-accent_2 text-accent_2 bg-gray-50" : "")}
      end
    >
      <div className="flex flex-col -space-y-2 items-center md:flex-row md:gap-2 md:items-end px-2 md:px-8 py-3">
        <div className="relative">
          <Icon className="mb-1 text-2xl md:text-lg" />
          {badge}
        </div>
        <span className="capitalize text-xs text-gray-400 md:text-inherit md:text-lg w-16 md:w-auto text-center">
          {label}
        </span>
      </div>
    </NavLink>
  );
};

export default ActiveLink;
