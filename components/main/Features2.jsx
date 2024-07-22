import Image from "next/image";

const featuredCopy = {
  featuredHeading: " A highly useful Google sheet? - rare but true!",
  featuredDescription:
    "Curated list of tools and knowledge to save you search time, so you can focus on centering a <div> and changing button colors.",
};

// In case you wish list your features
// const features = [
//   {
//     name: "Build with",
//     description:
//       "Don't waste time browsing, use our list of 50+ tools to create what you want.",
//     icon: BuildIcon,
//   },
//   {
//     name: "Leverage AI",
//     description:
//       "Integrating AI in your product? Great, we've found dozens that can help.",
//     icon: SmartToyIcon,
//   },
//   {
//     name: "Read the secrets",
//     description:
//       "Use our curated list of the writeups for builders to read and implement.",
//     icon: MenuBookIcon,
//   },
// ];

export default function Features2() {
  return (
    <div className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="order-2 lg:order-1 flex overflow-hidden flex-1 justify-center rounded-xl bg-white shadow-xl ring-1 ring-gray-400/10 items-center h-[24rem] lg:h-auto">
            <video
              src="https://osdblyvwidixouibqkrf.supabase.co/storage/v1/object/public/Badminton/resource.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="order-1 lg:order-2 lg:pt-4 lg:flex lg:items-center">
            <div className="lg:pl-8 lg:max-w-lg">
              <h2 className="text-3xl lg:text-4xl font-semibold sm:leading-[55px] sm:tracking-tight text-gray-300">
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
        </div>
      </div>
    </div>
  );
}
