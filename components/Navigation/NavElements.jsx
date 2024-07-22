"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

//  Don't forget to add the href as an id to the desired section my friend!

const NavElements = () => {
  const pathname = usePathname();
  const router = useRouter();

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
      // Redirect to external links or routes
      router.push(href, { scroll: false });
    }
  };

  return (
    <div className="hidden lg:flex lg:gap-x-12">
      <div className="flex items-center justify-center w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
        {memoizedNavigation.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className="text-lg font-semibold leading-6 text-gray-100 mr-5 ml-5"
            // onClick={(e) => handleScroll(e, item.href.substring(1))}
            onClick={(e) => handleScroll(e, item.href)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavElements;
