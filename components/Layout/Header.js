import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TiLocationOutline } from "react-icons/ti";
import { MdOutlineBusiness } from "react-icons/md";

export function Header() {
  return (
    <header className="bg-[#cc0000]  py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-white  flex items-center">
            <TiLocationOutline className="fill-white" />
            <Link
              className="pl-2 pr-8 font-normal  text-[12px] text-white "
              href="#"
            >
              Ship to 43110
            </Link>
            <MdOutlineBusiness className="fill-white" />
            <Link className="font-medium text-[12px] pl-2 " href="#">
              Reynoldsburg
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link className="text-[12px] font-medium text-white" href="#">
              Registry
            </Link>
            <Link className="text-[12px] font-medium text-white" href="#">
              Weekly Ad
            </Link>
            <Link className="font-medium text-[12px] pl-2 text-white" href="#">
              RedCard
            </Link>{" "}
            <Link className="text-[12px] font-medium text-white" href="#">
              Target Circle
            </Link>
            <Link className="text-[12px] font-medium text-white" href="#">
              Find Stores
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}
