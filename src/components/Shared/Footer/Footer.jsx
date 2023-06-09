import { Link } from "react-router-dom";
import Container from "../../Container";
import { RxTwitterLogo } from "react-icons/rx";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="mt-28 pt-10 border-t bg-gray-50">
      <Container>
        <div className="flex justify-between text-sm font-medium flex-wrap gap-8">
          <Logo />
          <div className="grid gap-2">
            <h5 className="text-lg font-semibold">Navigation</h5>
            <a href="/" className="hover:underline duration-300">
              Home
            </a>
            <a href="/programs" className="hover:underline duration-300">
              Programs
            </a>
            <a href="/instructors" className="hover:underline duration-300">
              Instructors
            </a>
          </div>
          <div className="grid gap-2">
            <h5 className="text-lg font-semibold">Legal</h5>
            <Link className="hover:underline duration-300">Privacy Policy</Link>
            <Link className="hover:underline duration-300">Terms</Link>
            <Link className="hover:underline duration-300">Conditions</Link>
          </div>
          <div className="grid gap-2">
            <h5 className="text-lg font-semibold">Contact Us</h5>
            <Link className="hover:underline duration-300">Email</Link>
            <Link className="hover:underline duration-300">Address</Link>
            <Link className="hover:underline duration-300">Helpline</Link>
          </div>
          <div>
            <div className="flex gap-3">
              <h5 className="text-lg font-semibold">Follow Us</h5>
              <div className="flex items-center gap-2 text-xl">
                <RxTwitterLogo />
                <AiOutlineInstagram />
                <CiLinkedin />
                <TbBrandGithub />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-dashed mt-6"></div>
        <div className="text-center text-sm font-medium py-4">
          © 2023 Linguage. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
