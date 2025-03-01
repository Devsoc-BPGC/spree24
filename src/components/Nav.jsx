import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <DropdownMenu className="bg-white z-20 ">
        <DropdownMenuTrigger asChild>
          <Button className="px-auto  h-12 ">
            <svg
              className="h-8 w-8 fill-current text-white"
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
        <DropdownMenuContent className="w-56 mr-2 font-Inter text-white font-bold text-2xl  bg-gradient-to-l from-slate-800 to-transparent text-right rounded outline-none border-none ">
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex justify-end text-xl text-right">
              <Link to="/">Home Page</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-end text-xl  text-right">
              <Link to="/sponsors">Sponsors</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-end text-xl  text-right">
              <Link to="/gallery">Gallery</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-end text-xl  text-right">
              <Link to="https://register.bits-spree.org">Register</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-end text-xl  text-right">
              <Link to="/aboutus">About Us</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex justify-end text-xl  text-right">
              <Link to="/media">Media Partners 24'</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
export default Nav;
