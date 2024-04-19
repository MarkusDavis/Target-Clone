/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Eh8rFx5yngA
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"

export function banners() {
  return (
    (<div className="bg-[#cc0000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <TargetIcon className="h-8 w-8 text-white" />
            <Link className="text-white text-sm font-medium hover:underline" href="#">
              Categories
            </Link>
            <Link className="text-white text-sm font-medium hover:underline" href="#">
              Deals
            </Link>
            <Link className="text-white text-sm font-medium hover:underline" href="#">
              New & Featured
            </Link>
            <Link className="text-white text-sm font-medium hover:underline" href="#">
              Pickup & Delivery
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white px-3 py-1.5 rounded-md">
              <Input
                className="border-none"
                placeholder="What can we help you find?"
                type="text" />
              <SearchIcon className="h-5 w-5 text-[#cc0000]" />
            </div>
            <UserIcon className="h-6 w-6 text-white" />
            <span className="text-white text-sm font-medium">Hi, Markus</span>
            <ShoppingCartIcon className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </div>)
  );
}


function TargetIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}


function ShoppingCartIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path
        d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>)
  );
}
