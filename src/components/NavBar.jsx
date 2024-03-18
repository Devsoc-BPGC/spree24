import PropTypes from "prop-types";
import fireball from "../assets/fireball.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const arr = ["Media Partners", "Sponsors", "Our Team", "About Us", "Rulebook"];

const NavBar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:flex lg:relative lg:font-Alata lg:font-bold lg:text-2xl lg:text-black lg:flex-row lg:space-evenly lg:gap-6 lg:w-[100vw] lg:h-[10vh] lg:justify-evenly">
        {arr.map((item, index) => (
          <NavItem key={index} text={item} />
        ))}
        <img src={fireball} className="lg:h-12 lg:p-1"></img>
      </div>
      {/* Phone Dropdown */}
      <div className="lg:hidden">
        <DropdownMenu className="bg-black z-">
          <DropdownMenuTrigger asChild>
            <Button className="px-2 pb-5 h-14 w-14 bg-transparent">
              <svg
                className="h-10 w-10 fill-current text-black"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
                />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-2 font-Alata text-black text-right bg-transparent md:hidden rounded outline-none border-none ">
            <DropdownMenuGroup>
              <DropdownMenuItem className="flex">
                <Link to="/">Media Partners</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex">
                <Link to="/">Our Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex">
                <Link to="/">About Us</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex">
                <Link to="/">Rule Book</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex">
                <Link to="/">Sponsors</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <img src={fireball} className="absolute top-0 right-0 h-16"></img>
      </div>
    </>
  );
};

const NavItem = ({ text }) => {
  return (
    <div className="text-black cursor-pointer p-1 hover:text-gray-800">
      {text}
    </div>
  );
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NavBar;
