const Frequently = () => {
  const Questions = [
    {
      Question: "What is the Indie Hacker Kit?",
      Answer:
        "Indie Hacker Kit is a combination of a code boilerplate with auth/payments/DB already setup alongwith a resource sheet, notion template and ai prompts with clear instructions to help you launch a product today",
    },
    {
      Question: "If I can build it, why should I buy it?",
      Answer:
        "In the words of the great Marc louvion, 'Others are launching while you're building' ",
    },
    {
      Question: "How do I get started?",
      Answer:
        "Choose a plan, get access to the resources with the instruction video, put in your keys, follow the roadmap and Launch!",
    },
    {
      Question: "What all do I get?",
      Answer:
        "IHK is a combination of a boilerplate with launch instructions, templates, and resource sheet",
    },
    {
      Question: "Can I use this as a junior dev?",
      Answer:
        "Yes you can, given you've already worked with JS, Tailwind CSS and Next JS. The instructions does the job of making it easy to use and launch",
    },
    {
      Question: "What if my question is not listed here",
      Answer:
        "Not a problem, reach out to me via Mail, twitter or LinkedIn and I'll be very happy to answer. Links in Footer.",
    },
  ];

  return (
    <section className="py-12 lg:py-32">
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6" id="faq-section">
        <div className="flex justify-center">
          <div className="max-w-screen-md mb-8 lg:mb-16 p-2">
            <h2 class="text-3xl text-center mb-2 lg:text-4xl font-semibold text-white sm:leading-[55px] sm:tracking-tight">
              FAQ
            </h2>
            <p className="text-gray-300 mt-4 text-lg text-center">
              Discover more about Indie Hacker Kit
            </p>
          </div>
        </div>

        {/* Collection */}
        <div className="text-gray-300">
          {/* FAQ begins here */}
          <div className="max-w-screen-xl mx-auto px-5 flex justify-center">
            <div className="grid divide-y divide-neutral-200 w-full mx-auto mt-8">
              {Questions.map((que) => (
                <div className="py-5" key={Questions.indexOf(que)}>
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span> {que.Question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className="text-gray-300 mt-3 group-open:animate-fadeIn">
                      {que.Answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequently;
