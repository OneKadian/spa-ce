"use client";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SideMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    { name: "Pricing", href: "#pricing-section2" },
    { name: "Stack", href: "#stack-section" },
    { name: "FAQ", href: "#faq-section" },
  ];

  const membersNavigation = [
    { name: "Home", href: "/" },
    {
      name: "Billing",
      href: "https://billing.stripe.com/p/login/test_3csaG2csp7sj8wwbII",
    },
  ];

  // const memoizedNavigation =
  //   router.pathname === "/members" ? membersNavigation : navigation;
  const memoizedNavigation = useMemo(() => {
    switch (pathname) {
      case "/members":
        return membersNavigation;
      case "/sign-in":
        return membersNavigation;
      case "/":
        return navigation;
      // ...other cases
      default:
        return navigation;
    }
  }, [pathname, navigation, membersNavigation]);

  const handleScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.getElementById(href.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href, { scroll: false });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header>
      <div className="flex lg:hidden">
        <button
          type="button"
          className={`${
            mobileMenuOpen ? "hidden" : ""
          } lg:hidden m-2.5 inline-flex items-center justify-center rounded-md text-gray-100`}
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>
      <Dialog
        as="div"
        className="lg:hidden "
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-3/5 overflow-y-auto shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <Image className="hidden h-12 w-auto" src={Logo} alt="" /> */}
              <Image
                className="hidden h-12 w-auto"
                src="/logo.png"
                alt=""
                width={70}
                height={70}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6 ">
                {memoizedNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-gray-100 hover:text-white"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default SideMenu;
