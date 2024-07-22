import Link from "next/link";

const FooterItems = [
  {
    id: 1,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/onekadian/",
  },
  {
    id: 2,
    name: "Mail",
    href: "mailto:anirudh@kadianventures.com",
  },
  {
    id: 3,
    name: "Twitter",
    href: "https://twitter.com/onekadian",
  },
];

// Update the array above, limit to 4 for better ux and you have a footer ready

const Footer = () => {
  return (
    <footer className="p-4 md:p-8 lg:p-10">
      <div className="mx-auto max-w-screen-xl text-center">
        <h2 className="flex justify-center items-center text-2xl font-semibold text-white">
          Indie Hacker Kit
        </h2>
        <p className="my-6 text-gray-500">
          Everything you need to execute that idea today and launch your product
        </p>
        {/* Footer Items */}
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-300">
          {FooterItems.map((foot) => (
            <li key={foot.id}>
              <Link href={foot.href} className="mr-4 hover:underline md:mr-6 ">
                {foot.name}
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-sm text-gray-500 sm:text-center">
          Made with <a href="#" className="hover:underline"></a>
          ❤️ by Anirudh Kadian
        </span>
      </div>
    </footer>
  );
};

export default Footer;
