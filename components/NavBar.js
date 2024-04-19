import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="flex justify-center w-full md:justify-start">
        <Link href="/">
          <span className="inline-block md:relative md:transform md:-translate-x-1/2 md:left-1/2">
            <Image src="/icons/target-icon.svg" alt="Target Icon" width={40} height={40} />
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 justify-center flex-1">
        <Link href="/about"><span className="cursor-pointer text-gray-800 hover:text-gray-600">About</span></Link>
        <Link href="/services"><span className="cursor-pointer text-gray-800 hover:text-gray-600">Services</span></Link>
        <Link href="/portfolio"><span className="cursor-pointer text-gray-800 hover:text-gray-600">Portfolio</span></Link>
        <Link href="/contact"><span className="cursor-pointer text-gray-800 hover:text-gray-600">Contact</span></Link>
      </div>
      <div className="flex md:hidden">
        <button className="mobile-menu-button">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
}
