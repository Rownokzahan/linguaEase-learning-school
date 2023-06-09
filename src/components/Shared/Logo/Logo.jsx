import { FaLanguage } from "react-icons/fa";
const Logo = () => {
  return (
    <div className="relative text-accent_2 flex flex-col -space-y-4 items-baseline">
      <FaLanguage className="text-4xl" />
      <span className="text-2xl font-crimson">LinguaEase</span>
    </div>
  );
};

export default Logo;
