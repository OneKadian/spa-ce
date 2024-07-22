import Image from "next/image";

const featuredCopy = {
  featuredHeading: "Build Fast like your life depends on it (it could)",
  featuredDescription:
    "Next.js boilerplate in 4 themes with pre-setup auth, payments and database. Still can't launch? You belong to the no code tools 😑",
};

// In case you wish list your features
// const features = [
//   {
//     name: "Ready to use Components",
//     description:
//       "Don't create from scratch, build quickly using 15+ components.",
//     icon: LayersIcon,
//   },
//   {
//     name: "Payments, Auth and DB",
//     description:
//       "Save hours by not having to set up, simply put keys and get started",
//     icon: VpnKeyIcon,
//   },
//   {
//     name: "Clear Instructions",
//     description:
//       "Documentation, templates & notes to ensure it's easy for first timers and juniors too.",
//     icon: LibraryBooksIcon,
//   },
// ];

export default function FeaturedSection() {
  return (
    <div className="overflow-hidden  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 lg:flex lg:items-center">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-semibold sm:leading-[55px] sm:tracking-tight text-bold text-gray-300">
                {featuredCopy.featuredHeading}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                {featuredCopy.featuredDescription}
              </p>
              {/* Features list */}
              {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-300"
                        aria-hidden="true"
                      />
                      {feature.name}:
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>
          <div className="flex bg-[#1a1b26] flex-1 overflow-hidden  justify-center rounded-xl shadow-xl ring-1 ring-gray-400/10 items-center h-[24rem] lg:h-auto">
            <video
              src="https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/CodeFiles.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* <div className="flex justify-center items-center">
            <Image
              src={components2}
              alt="Product screenshot"
              className="w-[48rem]  rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
