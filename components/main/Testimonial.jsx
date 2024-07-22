const Testimanual = () => {
const Testimonials = [
  {
    id: 1,
    name: "Bonnie Green",
    designation: "Developer at Open AI",
    Image: "https://randomuser.me/api/portraits/women/44.jpg",
    words:
      "Indie Hacker Kit is a game-changer for developers like me. It provides an exceptional collection of templates, roadmaps, and boilerplate code that has transformed the way I approach SaaS development",
  },
  {
    id: 2,
    name: "John Doe",
    designation: "Product Manager at XYZ Corp",
    Image: "https://randomuser.me/api/portraits/men/1.jpg",
    words:
      "Indie Hacker Kit is a game-changer! It provides a complete set of templates, roadmaps, and boilerplate code that streamlined our SaaS development process. We launched our product in just 30 minutes.",
  },
  {
    id: 3,
    name: "Alice Smith",
    designation: "Designer at Creative Solutions",
    Image: "https://randomuser.me/api/portraits/women/12.jpg",
    words:
      "I'm amazed by Indie Hacker Kit's versatility. As a designer, I appreciate the beautifully designed templates it offers, which allowed me to create stunning UIs for our SaaS product in no time.",
  },
  {
    id: 4,
    name: "Bob Johnson",
    designation: "CEO at Tech Innovators",
    Image: "https://randomuser.me/api/portraits/men/25.jpg",
    words:
      "Our SaaS startup wouldn't have come this far without Indie Hacker Kit. It saved us countless hours by providing ready-made roadmaps and boilerplate code. Highly recommended!",
  },
  {
    id: 5,
    name: "Ella Davis",
    designation: "Marketing Specialist at Growth Co.",
    Image: "https://randomuser.me/api/portraits/women/32.jpg",
    words:
      "Indie Hacker Kit is a game-changer for marketers too. Its high-converting templates made our SaaS product launch a breeze. We reached our target audience faster than ever before!",
  },
  {
    id: 6,
    name: "James Wilson",
    designation: "CTO at Tech Innovations",
    Image: "https://randomuser.me/api/portraits/men/15.jpg",
    words:
      "Indie Hacker Kit is a lifesaver for developers. With its comprehensive templates and boilerplate, we cut development time in half. Launching our SaaS in 30 minutes? It's a reality with Indie Hacker Kit.",
  },
];


  return (
    <div class="py-24 sm:py-32">
      <div class="text-center"></div>
      <div class="grid grid-cols-1 p-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            class="text-gray-300 border border-gray-300 rounded-xl p-10 flex flex-col justify-between"
          >
            {testimonial.words}
            <div class="mt-10 flex space-x-3 items-center">
              <img
                alt="customer testimonial portrait"
                src={testimonial.Image}
                class="w-[60px] aspect-square rounded-full object-cover object-top"
              />
              <div>
                <p class="text-lg font-medium">{testimonial.name}</p>
                {testimonial.designation}
                <p></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimanual;
