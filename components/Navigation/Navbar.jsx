import Image from "next/image";
import NavElements from "./NavElements"; // Assuming you export NavElements from your NavElements component
import SideMenu from "./Sidebar"; // Assuming you export SideMenu from your SideMenu component
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";

export const Navbar = async () => {
  const user = await currentUser();

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <div className="flex lg:flex-1">
          {/* <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src="/logo.png"
              alt="Logo"
              width={70}
              height={70}
              draggable={false}
              className="cursor-pointer hover:animate-slowspin"
            />
          </Link> */}
        </div>
        {/* Navbar elements */}
        <NavElements />
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <div className="flex items-center">
            {/* Clerk user button based on cookies, Login button */}
            {!user ? (
              // <Link
              //   href="/sign-in"
              //   className="text-lg font-semibold leading-6 text-gray-100 mx-4"
              // >
              //   Log in
              // </Link>
              <>
                <Link
                  href="/sign-in"
                  // className="btn btn--secondary ml-4"
                  // className="inline-flex w-full  cursor-pointer  items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 ml-4 to-neutral-500 border border-solid border-neutral-400 transition-colors duration-300 md:w-auto"
                  className="w-full hidden text-lg font-semibold leading-6 text-gray-100 cursor-pointer md:inline-flex items-center justify-center gap-3 rounded-lg px-8 py-2 btn btn--secondary md:w-auto"
                >
                  Login
                  {/* <FaArrowRightLong className="text-white" /> */}
                </Link>
                <Link
                  href="/sign-in"
                  // className="btn btn--secondary ml-4"
                  className="inline-flex text-xl font-semibold leading-6 text-gray-100 md:hidden w-max cursor-pointer items-center justify-center gap-3 rounded-lg px-4 py-2 btn btn--secondary md:w-auto"
                  // className="text-lg font-semibold leading-6 mx-2 inline-flex md:hidden
                  // cursor-pointer items-center justify-center gap-3 rounded-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 ml-4 to-neutral-500 border border-solid border-neutral-400 transition-colors duration-300
                  // "
                >
                  Login
                </Link>
              </>
            ) : (
              <UserButton afterSignOutUrl="/" className="" />
            )}
            {/* <Hotkey /> */}
            {/* Side menu for mobile */}
            <SideMenu />
          </div>
        </div>
        {/* </nav>
    </header> */}
      </div>
    </div>
  );
};
