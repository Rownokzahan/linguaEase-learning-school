import { FaLanguage } from "react-icons/fa";

const SidebarLogo = () => {
  return (
    <div className="relative text-accent_2 flex flex-col -space-y-4 items-baseline px-2 md:px-8">
      <FaLanguage className="text-5xl md:text-4xl mx-auto md:mx-0" />
      <span className="text-2xl font-crimson hidden md:block">LinguaEase</span>
    </div>
  );
};

export default SidebarLogo;
